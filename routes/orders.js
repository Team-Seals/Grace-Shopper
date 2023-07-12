const {
  getAllOrders,
  createOrders,
  updateOrder,
  deleteOrder,
  getCartByUserId,
} = require("../db/adapters/orders");

const express = require("express");

const orderRouter = express.Router();

const { authRequired, verifyToken } = require("./utility");

//GET /api/orders/test
orderRouter.get("/test", (req, res, next) => {
  res.send("ORDERS COMING SOON!");
});

//GET /api/orders
orderRouter.get("/", async (req, res, next) => {
  try {
    const orders = await getAllOrders();
    res.send(orders);
  } catch (error) {
    next(error);
  }
});

// GET /api/orders/cart
orderRouter.get("/cart", verifyToken, async (req, res, next) => {
  try {
    const userCart = await getCartByUserId(req.user.id);
    res.send(userCart);
  } catch (error) {
    next(error);
  }
});

//POST /api/orders
orderRouter.post("/", async (req, res, next) => {
  try {
    const { user_id, status } = req.body;
    const newOrder = await createOrders({ user_id, status });
    res.send(newOrder);
  } catch (error) {
    next(error);
  }
});

//PATCH /api/orders/:user_id
orderRouter.patch("/:user_id", async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const { name, total_price, status } = req.body;
    const updatedOrder = await updateOrder(user_id, {
      name,
      total_price,
      status,
    });
    res.send(updatedOrder);
  } catch (error) {
    next(error);
  }
});

//DELETE /api/orders/:userId
orderRouter.delete("/:user_id", async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const deletedOrder = await deleteOrder(user_id);
    res.send(deletedOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = orderRouter;
