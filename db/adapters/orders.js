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

async function getOrderById(orderId) {
  try {
    const {
      rows: [order],
    } = await client.query(
      `
        SELECT * FROM orders
        WHERE id = $1;
      `,
      [orderId]
    );
    return order;
  } catch (error) {
    throw error;
  }
}

async function updateOrder(orderId, { user_id, total_price, status }) {
  try {
    const {
      rows: [order],
    } = await client.query(
      `
        UPDATE orders
        SET user_id = $1,
            total_price = $2,
            status = $3
        WHERE id = $4
        RETURNING *;
      `,
      [user_id, total_price, status, orderId]
    );

    if (!order) {
      return null;
    }

    return order;
  } catch (error) {
    throw error;
  }
}

async function deleteOrder(orderId) {
  try {
    const {
      rows: [order],
    } = await client.query(
      `
        DELETE FROM orders
        WHERE id = $1
        RETURNING *;
      `,
      [orderId]
    );

    if (!order) {
      return null;
    }

    return order;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
