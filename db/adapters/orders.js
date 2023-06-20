const client = require("../client");

async function createOrders({ user_id, total_price, stauts }) {
  try {
    console.log("Starting to insert ORDERS into db");
    const {
      rows: [order],
    } = await client.query(
      `
        INSERT INTO orders(user_id, total_price, status)
        VALUES ($1, $2, $3)
        RETURNING *;
        `,
      [user_id, total_price, stauts]
    );
    return order;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createOrders,
};
