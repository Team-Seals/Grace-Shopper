const client = require("../client");

async function createProduct({
  title,
  description,
  price,
  inventory,
  category_id,
}) {
  try {
    console.log("starting to insert PRODUCTS into db");
    const {
      rows: [product],
    } = await client.query(
      `
        INSERT INTO products(title, description, price, inventory, category_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
        `,
      [title, description, price, inventory, category_id]
    );
    return product;
  } catch (error) {
    throw error;
  }
}

async function getProductsById(productId) {
  try {
    const {
      rows: [product],
    } = await client.query(
      "SELECT * FROM products WHERE id=$1",
      [productId]
    )
  } catch (error) {
    throw error;
  }
}

async function getAllProducts() {
  try {
    const {
      rows: allProducts, 
    } = await client.query(
      "SELECT * FROM products"
    )
  } catch (error) {
    
  }
}

module.exports = {
  createProduct,
  getProductsById,
  getAllProducts
};
