// Create some seed data and export it from this file
const users = [
  { username: "edgard123@gmail.com", password: "12345678" },
  { username: "Mark123@yahoo.com", password: "54321" },
];

const products = [
  {
    title: "Jordan 1s",
    description: "Jordans first ever sneaker",
    image_url:
      "https://res.cloudinary.com/duheblu5c/image/upload/f_auto,q_auto/v1/GraceShopper/d57pqepz2uwu0luczj8u",
    price: 150,
    inventory: 100,
    category_id: 1,
  },
  {
    title: "Nike Air Force 1",
    description: "Padded collar feels soft and comfortable",
    image_url:
      "https://tse2.mm.bing.net/th?id=OIP.CpH6AkieN2m8qqaK8z3LWwHaHa&pid=Api&P=0&h=180",
    price: 120,
    inventory: 30,
    category_id: 1,
  },
  {
    title: "Nike Trainers",
    description: "Lightweight training shoes",
    image_url:
      "https://cdna.lystit.com/photos/2013/11/23/nike-blackgamma-blue-mens-free-trainer-50-training-sneakers-from-finish-line-product-1-15197952-586891147.jpeg",
    price: 70,
    inventory: 50,
    category_id: 1,
  },
  {
    title: "Adidas Originals Superstar",
    description: "Original superstarts is casual and comfortable",
    image_url:
      "https://http2.mlstatic.com/adidas-superstar-originals-D_NQ_NP_141215-MPE25152480870_112016-F.jpg",
    price: 45,
    inventory: 20,
    category_id: 2,
  },
  {
    title: "Advantage Sneaker",
    description:
      "Adidas Advantage sneakers are comforatable and lightweight everywhere and anywhere",
    image_url:
      "https://http2.mlstatic.com/zapatillas-adidas-advantage-clean-blanco-urbanas-2017-ndph-D_NQ_NP_525515-MPE25266856104_012017-F.jpg",
    price: 30,
    inventory: 100,
    category_id: 2,
  },
  {
    title: "Yeezy Slides",
    description: "Slides from popular rapper Kanye West",
    image_url:
      "https://www.modern-notoriety.com/wp-content/uploads/2020/09/yeezy-450-slide-5-1024x1024.jpeg",
    price: 200,
    inventory: 200,
    category_id: 2,
  },
  {
    title: "Puma Roma Basic",
    description: "Classic casual Puma Sneakers for fashion",
    image_url:
      "https://cdna.lystit.com/photos/zappos/c7dc45e3/puma-WhiteBlack-Roma-Basic-blackblack-Mens-Shoes.jpeg",
    price: 70,
    inventory: 100,
    category_id: 3,
  },
  {
    title: "Puma LaMelo Ball MB.01",
    description: "Basketball shoes from All-Star basketball player LaMelo Ball",
    image_url:
      "https://tse4.mm.bing.net/th?id=OIP.sC2ZgG3XiT-qvlWBGq4O2AHaFS&pid=Api&P=0&h=180",
    price: 114,
    inventory: 100,
    category_id: 3,
  },
  {
    title: "Converse Chuck Taylor All Star Classic",
    description: "Original Chuck Talyors for the gym or for casual fashion",
    image_url:
      "https://tse3.mm.bing.net/th?id=OIP.zJVjxB6V9zIb-utpk7NpnQHaFj&pid=Api&P=0&h=180",
    price: 65,
    inventory: 120,
    category_id: 4,
  },
  {
    title: "Converse Chuck Taylor All Star Classic Lows",
    description:
      "Original Chuck Taylors Lows for the gym or for casual fashion",
    image_url:
      "https://cdnd.lystit.com/photos/2013/10/28/converse-black-black-chuck-taylor-leather-low-trainers-product-1-14528331-644082400.jpeg",
    price: 35,
    inventory: 100,
    category_id: 4,
  },
  {
    title: "New Balance 550",
    description: "Lifestyle / Casual shoes great for vintage fashion",
    image_url:
      "https://sneakernews.com/wp-content/uploads/2021/06/new-balance-550-bb550wt1-green-1.jpg?w=1140",
    price: 110,
    inventory: 50,
    category_id: 5,
  },
  {
    title: "New Balance 2002R",
    description: "Top Quality vintage shoes great for casual fashion",
    image_url:
      "https://sneakernews.com/wp-content/uploads/2021/02/New-Balance-2002R-ML2002RV1-04.jpg",
    price: 140,
    inventory: 40,
    category_id: 5,
  },
  {
    title: "Vans Old Skool",
    description: "Old school vintage vans",
    image_url:
      "https://tse1.mm.bing.net/th?id=OIP.tMAnnm-Qd4-pOwdtbT9-XAHaFj&pid=Api&P=0&h=180",
    price: 50,
    inventory: 120,
    category_id: 6,
  },
  {
    title: "Vans Classic Slip-On",
    description: "Classic Slip-On shoes that are super comfortable",
    image_url:
      "https://tse2.mm.bing.net/th?id=OIP.HzVv5I94jVysKChO_g-DvwHaFF&pid=Api&P=0&h=180",
    price: 60,
    inventory: 100,
    category_id: 6,
  },
  {
    title: "Reebok Club C 85",
    description: "Vintage Chalk Essential shoes",
    image_url:
      "https://www.80scasualclassics.co.uk/images/reebok-club-c-85-trainers-white-navy-p10121-63632_image.jpg",
    price: 90,
    inventory: 80,
    category_id: 7,
  },
  {
    title: "Reebok Classic Nylon Sneaker",
    description: "Classic comfortable sneakers, great for casual or running",
    image_url:
      "http://www.80scasualclassics.co.uk/images/reebok-classic-nylon-trainers-platinum-jet-blue-p8865-58023_image.jpg",
    price: 60,
    inventory: 60,
    category_id: 7,
  },
  {
    title: "Crocs Classic Clog",
    description:
      "Classic Croc Clogs that are super comfortable and lightweight",
    image_url:
      "https://tse2.mm.bing.net/th?id=OIP.n14qhBz734ssCr_SQdnyOQHaHa&pid=Api&P=0&h=180",
    price: 25,
    inventory: 100,
    category_id: 8,
  },
  {
    title: "Crocs Classic Lined Clog",
    description: "Lined Classic Crocs to keep feet warm and cozy",
    image_url: "http://images.dresscodeclothing.com/dimages/697771.aspx",
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

const cart_items = [];

module.exports = { users, products, categories, cart_items, orders };
