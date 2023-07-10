const {
  createProduct,
  getProductsById,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../db/adapters/products");

const express = require("express");

const productRouter = express.Router();

// GET /api/products/test
productRouter.get("/test", (req, res, next) => {
  res.send("PRODUCTS COMING SOON!");
});

// GET /api/products
productRouter.get("/", async (req, res, next) => {
  try {
    const products = await getAllProducts();
    res.send(products);
  } catch (error) {
    next(error);
  }
});
// GET /api/products/:id
productRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await getProductsById(id);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

/* WE MIGHT NOT NEED ALL OF THESE ROUTES */

// POST /api/products
productRouter.post("/", async (req, res, next) => {
  //ERROR: "message": "null value in column \"description\" of relation \"products\" violates not-null constraint",
  try {
    const { title, description, price, inventory, category_id } = req.body;
    const newProduct = await createProduct({
      title,
      description,
      price,
      inventory,
      category_id,
    });
    res.send(newProduct);
  } catch (error) {
    next(error);
  }
});

// PATCH /api/products/:id
productRouter.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, description } = req.body;
    const updatedProduct = await updateProduct(id, {
      name,
      price,
      description,
    });
    res.send(updatedProduct);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/products/:id
productRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await deleteProduct(id);
    res.send(deletedProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = productRouter;
