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

async function getCartItemById(cartItemId) {
  try {
    const {
      rows: [cart_item],
    } = await client.query(
      `
        SELECT * FROM cart_items
        WHERE id = $1;
      `,
      [cartItemId]
    );
    return cart_item;
  } catch (error) {
    throw error;
  }
}

async function updateCartItem(cartItemId, { quantity, price }) {
  try {
    const {
      rows: [cart_item],
    } = await client.query(
      `
        UPDATE cart_items
        SET quantity = $1,
            price = $2
        WHERE id = $3
        RETURNING *;
      `,
      [quantity, price, cartItemId]
    );

    if (!cart_item) {
      return null;
    }

    return cart_item;
  } catch (error) {
    throw error;
  }
}

async function deleteCartItem(cartItemId) {
  try {
    const {
      rows: [cart_item],
    } = await client.query(
      `
        DELETE FROM cart_items
        WHERE id = $1
        RETURNING *;
      `,
      [cartItemId]
    );

    if (!cart_item) {
      return null;
    }

    return cart_item;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCartItem,
  getCartItemById,
  updateCartItem,
  deleteCartItem,
};