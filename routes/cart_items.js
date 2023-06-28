const {
  createCartItem,
  deleteCartItem,
  editCartItem,
  getCartItems,
} = require("../db/adapters/cart_items");

const express = require("express");

const cartItemsRouter = express.Router();

console.log("testing cart items routes");

//GET   /api/cart_items/test
cartItemsRouter.get("/test", (req, res, next) => {
  res.send("CREATING CART ITEMS.");
});

//GET /api/cart_items
cartItemsRouter.get("/", async (req, res, next) => {
  try {
    const cart_items = await getCartItems();
    res.send(cart_items);
  } catch (error) {
    next(error);
  }
});

//DELETE  /api/cart_items/:orderId
cartItemsRouter.delete("/order_id", async (req, res, next) => {
  try {
    const { order_id, product_id } = req.params;
    const deletedCartItem = await deleteCartItem(order_id, product_id);
    res.send(deletedCartItem);
  } catch (error) {
    next(error);
  }
});

//POST /api/cart_items
cartItemsRouter.post("/", async (req, res, next) => {
  try {
    const { order_id, product_id, quantity, price } = req.body;
    const newCartItem = await createCartItem({
      order_id,
      product_id,
      quantity,
      price,
    });
    res.send(newCartItem);
  } catch (error) {
    next(error);
  }
});
//PATCH /api/cart_items/:orderId
cartItemsRouter.patch("/order_id", async (req, res, next) => {
  try {
    const { quantity } = req.params;
    const { order_id, product_id } = req.body;
    const updatedCartItem = await editCartItem(quantity, {
      order_id,
      product_id,
    });
    res.send(updatedCartItem);
  } catch (error) {
    next(error);
  }
});

module.exports = cartItemsRouter;
