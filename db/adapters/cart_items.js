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
async function deleteCartItem(order_id, product_id){

};
async function editCartItem(order_id, product_id, quantity){

};
async function getCartItems(order_id){

};
module.exports = {
  createCartItem,
};
