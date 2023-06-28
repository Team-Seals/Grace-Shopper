const client = require("../client");

async function createOrders({ user_id, name, total_price, status }) {
  try {
    console.log("Starting to insert ORDERS into db");
    const {
      rows: [order],
    } = await client.query(
      `
        INSERT INTO orders(user_id, name, total_price, status)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
        `,
      [user_id, name, total_price, status]
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

async function updateOrder(order_id, { name, total_price, status }) {
  try {
    console.log("...updating orders");
    const {
      rows: [order],
    } = await client.query(
      `
      UPDATE orders
      SET name = $1, total_price = $2, status = $3
      WHERE id = $4
      RETURNING *;
      `,
      [name, total_price, status, order_id]
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
      rows: [deletedOrder],
    } = await client.query(
      `
      DELETE FROM orders
      WHERE id = $1
      RETURNING *;
      `,
      [order_id]
    );
    // may revisit
    await client.query(
      `
    DELETE FROM cart_items
    WHERE order_id = $1;
    `,
      [order_id]
    );
    return deletedOrder;
  } catch (error) {
    throw error;
  }
}

// async function deleteOrder(orderId) {
//   try {
//     const {
//       rows: [order],
//     } = await client.query(
//       `
//         DELETE FROM orders
//         WHERE id = $1
//         RETURNING *;
//       `,
//       [orderId]
//     );

//     if (!order) {
//       return null;
//     }

//     return order;
//   } catch (error) {
//     throw error;
//   }
// }

module.exports = {
  createOrders,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
