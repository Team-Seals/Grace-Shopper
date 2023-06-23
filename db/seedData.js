// Create some seed data and export it from this file
const users = [
  { username: "edgard123@gmail.com", password: "12345678" },
  { username: "Mark123@yahoo.com", password: "54321" },
];

const products = [
  {
    title: "Propeler",
    description: "Moves the plane",
    price: 1000,
    inventory: 1,
    category_id: 1,
  },
  {
    title: "Engine",
    description: "Plane engine",
    price: 50000,
    inventory: 3,
    category_id: 2,
  },
];

const categories = [{ name: "Engines" }, { name: "Glass" }];

const orders = [
  { user_id: 1, total_price: 3000, status: true },
  { user_id: 2, total_price: 70000, status: false },
];

const cart_items = [
  { order_id: 1, product_id: 1, quantity: 1, price: 4000 },
  { order_id: 2, product_id: 2, quantity: 4, price: 30000 },
];

module.exports = { users, products, categories, cart_items, orders };
