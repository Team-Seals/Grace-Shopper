// Create some seed data and export it from this file
const users = [
  { username: "edgard123@gmail.com", password: "12345678" },
  { username: "Mark123@yahoo.com", password: "54321" },
];

const products = [
  {
    title: "Jordan 1s",
    description: "Jordans first ever sneaker",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuMoz3i2PSpqGNJVSC7W7F_x-HwvNUpvAMA&usqp=CAU",
    price: 150,
    inventory: 100,
    category_id: 1,
  },
  {
    title: "Nike Air Force 1",
    description: "Padded collar feels soft and comfortable",
    price: 120,
    inventory: 30,
    category_id: 1,
  },
  {
    title: "Nike Trainers",
    description: "Lightweight training shoes",
    price: 70,
    inventory: 50,
    category_id: 1,
  },
  {
    title: "Adidas Originals Superstar",
    description: "Original superstarts is casual and comfortable",
    price: 45,
    inventory: 20,
    category_id: 2,
  },
  {
    title: "Advantage Sneaker",
    description:
      "Adidas Advantage sneakers are comforatable and lightweight everywhere and anywhere",
    price: 30,
    inventory: 100,
    category_id: 2,
  },
  {
    title: "Yeezy Slides",
    description: "Slides from popular rapper Kanye West",
    price: 200,
    inventory: 200,
    category_id: 2,
  },
  {
    title: "Puma Roma Basic",
    description: "Classic casual Puma Sneakers for fashion",
    price: 70,
    inventory: 100,
    category_id: 3,
  },
  {
    title: "Puma LaMelo Ball MB.01",
    description: "Basketball shoes from All-Star basketball player LaMelo Ball",
    price: 114,
    inventory: 100,
    category_id: 3,
  },
  {
    title: "Converse Chuck Taylor All Star Classic",
    description: "Original Chuck Talyors for the gym or for casual fashion",
    price: 65,
    inventory: 120,
    category_id: 4,
  },
  {
    title: "Converse Chuck Taylor All Star Classic Lows",
    description:
      "Original Chuck Taylors Lows for the gym or for casual fashion",
    price: 35,
    inventory: 100,
    category_id: 4,
  },
  {
    title: "New Balance 550",
    description: "Lifestyle / Casual shoes great for vintage fashion",
    price: 110,
    inventory: 50,
    category_id: 5,
  },
  {
    title: "New Balance 2002R",
    description: "Top Quality vintage shoes great for casual fashion",
    price: 140,
    inventory: 40,
    category_id: 5,
  },
  {
    title: "Vans Old Skool",
    description: "Old school vintage vans",
    price: 50,
    inventory: 120,
    category_id: 6,
  },
  {
    title: "Vans Classic Slip-On",
    description: "Classic Slip-On shoes that are super comfortable",
    price: 60,
    inventory: 100,
    category_id: 6,
  },
  {
    title: "Reebok Club C 85",
    description: "Vintage Chalk Essential shoes",
    price: 90,
    inventory: 80,
    category_id: 7,
  },
  {
    title: "Reebok Classic Nylon Sneaker",
    description: "Classic comfortable sneakers, great for casual or running",
    price: 60,
    inventory: 60,
    category_id: 7,
  },
  {
    title: "Crocs Classic Clog",
    description:
      "Classic Croc Clogs that are super comfortable and lightweight",
    price: 25,
    inventory: 100,
    category_id: 8,
  },
  {
    title: "Crocs Classic Lined Clog",
    description: "Lined Classic Crocs to keep feet warm and cozy",
    price: 60,
    inventory: 80,
    category_id: 8,
  },
];

const categories = [
  { name: "Nike" },
  { name: "Adidas" },
  { name: "Puma" },
  { name: "Converse" },
  { name: "New Balance" },
  { name: "Vans" },
  { name: "Rebock" },
  { name: "Crocs" },
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
