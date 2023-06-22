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

async function getAllOrders() {
  try {
    console.log("...getting all orders");
    const { rows } = await client.query(
      `
      SELECT *
      FROM orders;
      `
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getOrderById(order_id) {
  try {
    console.log("...getting order by Id");
    const {
      rows: [order],
    } = await client.query(
      `
    SELECT *
    FROM orders
    WHERE id=$1;
    `,
      [order_id]
    );
    return order;
  } catch (error) {
    throw error;
  }
}

async function updateOrder(order_id, { total_price, status }) {
  try {
    console.log("...updating orders");
    const {
      rows: [order],
    } = await client.query(
      `
      UPDATE orders
      SET total_price = $1, status = $2
      WHERE id = $3
      RETURNING *;
      `,
      [total_price, status, order_id]
    );
    return order;
  } catch (error) {
    throw error;
  }
}

async function deleteOrder(order_id) {
  try {
    console.log("deleting order...");
    const {
      rows: [order],
    } = await client.query(
      `
      DELETE FROM orders
      WHERE id = $1
      RETURNING *;
      `,
      [order_id]
    );
    return order;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createOrders,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
