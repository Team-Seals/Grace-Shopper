const client = require("../client");

async function createCartItem({ order_id, product_id, quantity }) {
  try {
    console.log("Starting to insert CART ITEMS into db");
    const {
      rows: [cart_item],
    } = await client.query(
      `
        INSERT INTO cart_items(order_id, product_id, quantity)
        VALUES ($1, $2, $3)
        RETURNING *;
        `,
      [order_id, product_id, quantity]
    );
    return cart_item;
  } catch (error) {
    throw error;
  }
}
async function deleteCartItem(order_id) {
  try {
    console.log("deleting cart item");
    const {
      rows: [cart_item],
    } = await client.query(
      `
      DELETE FROM cart_items
      WHERE id = $1
      RETURNING *;
      `,
      [order_id]
    );
    return cart_item;
  } catch (error) {
    throw error;
  }
}
async function editCartItem(order_id, product_id, quantity) {
  try {
    console.log("...editing cart item");
    const {
      rows: [cart_item],
    } = await client.query(
      `
      UPDATE cart_items
      SET quantity = $1
      WHERE order_id = $2 AND product_id = $3
      RETURNING *;
      `,
      [quantity, order_id, product_id]
    );
    return cart_item;
  } catch (error) {
    throw error;
  }
}

async function getAllCartItems() {
  console.log("getting all cart items");
  const { rows } = await client.query(`
  SELECT *
  FROM cart_items
  `);
  return rows;
}

module.exports = {
  createCartItem,
  deleteCartItem,
  editCartItem,
  getAllCartItems,
};
