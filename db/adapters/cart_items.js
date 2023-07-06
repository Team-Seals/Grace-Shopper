const client = require("../client");

async function createCartItem({ order_id, product_id, quantity, price }) {
  try {
    console.log("Starting to insert CART ITEMS into db");
    const {
      rows: [cart_item],
    } = await client.query(
      `
        INSERT INTO cart_items(order_id, product_id, quantity, price)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
        `,
      [order_id, product_id, quantity, price]
    );
    return cart_item;
  } catch (error) {
    throw error;
  }
}

// ---- Is this doing what you need it to do???
async function deleteCartItem(id) {
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
      [id]
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
async function getCartItems(order_id) {
  try {
    console.log("getting cart items");
    const {
      rows: [cart_items],
    } = await client.query(
      `SELECT *
      FROM cart_items;
      `
    );
    return cart_items;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createCartItem,
  deleteCartItem,
  editCartItem,
  getCartItems,
};
