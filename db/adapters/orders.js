const client = require("../client");

async function createOrders({ user_id, status }) {
  try {
    console.log("Starting to insert ORDERS into db");
    const {
      rows: [order],
    } = await client.query(
      `
        INSERT INTO orders(user_id, status)
        VALUES ($1, $2)
        RETURNING *;
        `,
      [user_id, status]
    );
    return order;
  } catch (error) {
    throw error;
  }
}

async function createOrderByUserId(user_id) {
  console.log("Creating order by userId");
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

async function getOrderByUserId(user_id) {
  const {
    rows: [order],
  } = await client.query(
    `
  SELECT
  orders.id AS id,
  orders.total_price AS total_price,
  orders.status AS status,
  orders.user_id AS user_id
  COALESCE(JSON_AGG(
    JSON_BUILD_OBJECT(
      'id', cart_items.id,
      'product_id', products.id,
      'title', products.title,
      'quantity', cart_items.quantity,
      'price', products.price
    )
  ), '[]'::json) AS products
FROM
  shoppingcarts
  LEFT JOIN cart_items ON orders.id = cart_items.order_id
  LEFT JOIN products ON products.id = cart_items.product_id
WHERE
  orders.user_id = $1
  AND orders.status = 'pending'
GROUP BY
  orders.id, orders.status, orders.user_id
  `,
    [user_id]
  );
  return order;
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

module.exports = {
  createOrders,
  getAllOrders,
  getOrderById,
  getOrderByUserId,
  updateOrder,
  deleteOrder,
};
