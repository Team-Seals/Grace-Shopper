// Create some seed data and export it from this file
const users = [
  { username: "edgard123@gmail.com", password: "12345678" },
  { username: "Mark123@yahoo.com", password: "54321" },
];

const products = [
  {
    title: "Jordan 1s",
    description: "Jordans first ever sneaker",
    price: 150,
    inventory: 100,
    category_id: 1,
  },
  {
    title: "Nike Air Force 1",
    description: "Padded collar feels soft and comfortable",
    price: 120,
    inventory: 30,
    category_id: 2,
  },
];

const categories = [
  { name: "Casual" },
  { name: "Running" },
  { name: "LifeStyle" },
  { name: "Basketball" },
  { name: "Sandals/Slides" },
  { name: "Boots" },
];

const orders = [
  { user_id: 1, name: "Edgard", total_price: 3000, status: true },
  { user_id: 2, name: "Mark", total_price: 70000, status: false },
];

const cart_items = [
  { order_id: 1, product_id: 1, quantity: 1, price: 4000 },
  { order_id: 2, product_id: 2, quantity: 4, price: 30000 },
];

module.exports = { users, products, categories, cart_items, orders };
