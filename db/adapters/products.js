const client = require("../client");

async function createProducts({
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

module.exports = {
  createProducts,
};
