const { getAllCategories } = require("../db/adapters/categories");

const express = require("express");

const categoriesRouter = express.Router();

categoriesRouter.get("/test", (req, res, next) => {
  res.send("CATEGORIES COMMING SOON!");
});

//GET /api/categories
categoriesRouter.get("/", async (req, res, next) => {
  try {
    const categories = await getAllCategories();
    res.send(categories);
  } catch (error) {
    next(error);
  }
});

module.exports = categoriesRouter;
