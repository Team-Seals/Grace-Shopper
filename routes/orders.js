const express = require("express");

const orderRouter = express.Router();

//GET /api/orders/test
orderRouter.get("/test", (req, res, next) => {
  res.send("ORDERS COMING SOON!");
});
