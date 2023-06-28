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
    } = await client.query("SELECT * FROM products WHERE id=$1", [productId]);
  } catch (error) {
    throw error;
  }
}

async function getAllProducts() {
  try {
    console.log("...getting all products");
    const { rows } = await client.query(`
    SELECT *
    FROM products;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function updateProduct(
  productId,
  { title, description, price, inventory, category_id }
) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
        UPDATE products
        SET title = $1,
            description = $2,
            price = $3,
            inventory = $4,
            category_id = $5
        WHERE id = $6
        RETURNING *;
      `,
      [title, description, price, inventory, category_id, productId]
    );

    if (!product) {
      return null;
    }

    return product;
  } catch (error) {
    throw error;
  }
}

async function deleteProduct(productId) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
        DELETE FROM products
        WHERE id = $1
        RETURNING *;
      `,
      [productId]
    );

    if (!product) {
      return null;
    }

    return product;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createProduct,
  getProductsById,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
