const {
  createCartItem,
  deleteCartItem,
  editCartItem,
  getAllCartItems,
} = require("../db/adapters/cart_items");
const { verifyToken } = require("./utility");
const client = require("../db/client");

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
    const cart_items = await getAllCartItems();
    res.send(cart_items);
  } catch (error) {
    next(error);
  }
});

//DELETE  /api/cart_items/:cartItemId

cartItemsRouter.delete("/:product_id/:order_id", async (req, res, next) => {
  try {
    const { order_id, product_id } = req.params;
    const deletedCartItem = await deleteCartItem(product_id, order_id);
    console.log("deleted cart item:", deleteCartItem);
    res.send(deletedCartItem);
  } catch (error) {
    next(error);
  }
});

//POST /api/cart_items
cartItemsRouter.post("/", verifyToken, async (req, res, next) => {
  try {
    const { product_id, quantity } = req.body;
    console.log("REQ.BODY:", req.body);

    // Create a variable we will reassign to the cart value
    let cart;

    // Check if the user has a cart..
    const {
      rows: [userCart],
    } = await client.query(
      `
          SELECT * FROM orders
          WHERE orders.user_id = $1
    `,
      [req.user.id]
    );

    cart = userCart;

    if (!cart) {
      console.log("Creating cart....");
      const {
        rows: [newCart],
      } = await client.query(
        `
          INSERT INTO orders(user_id, status)
          VALUES ($1, $2)
          RETURNING *;
      `,
        [req.user.id, false]
      );
      cart = newCart;
    }

    console.log("Our Cart: ", cart);

    const newCartItem = await createCartItem({
      order_id: cart.id,
      product_id,
      quantity,
    });
    res.send(newCartItem);
  } catch (error) {
    next(error);
  }
});

//PATCH /api/cart_items/:orderId
//needs work
cartItemsRouter.patch("/:order_id/edit/:product_id", async (req, res, next) => {
  try {
    const { order_id, product_id } = req.params;
    const { quantity } = req.body;
    const updatedCartItem = await editCartItem(order_id, product_id, quantity);
    res.send(updatedCartItem);
  } catch (error) {
    next(error);
  }
});

module.exports = cartItemsRouter;
