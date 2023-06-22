const client = require("./client");
//imports
const { createUser } = require("./adapters/users");
const { createProducts } = require("./adapters/products");
const { createCategories } = require("./adapters/categories");
const { createOrders } = require("./adapters/orders");
const { createCartItem } = require("./adapters/cart_items");

// test test
const {
  users,
  products,
  categories,
  orders,
  cart_items,
} = require("./seedData");

async function dropTables() {
  console.log("Dropping tables...");
  try {
    // may have to change order
    await client.query(`
    DROP TABLE IF EXISTS cart_items;
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS category;
    DROP TABLE IF EXISTS users;
    `);
  } catch (error) {
    console.error(error);
  }
}

async function createTables() {
  console.log("Creating tables...");
  try {
    //USER TABLE
    console.log("users");
    // saying "users" already exists
    await client.query(`
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    )
    `);

    //CATEGORY TABLE
    console.log("categories");
    await client.query(`
     CREATE TABLE category(
       id SERIAL PRIMARY KEY,
       name VARCHAR(255) UNIQUE NOT NULL
     )
     `);

    //PRODUCTS TABLE
    console.log("products");
    await client.query(`
    CREATE TABLE products(
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      price INTEGER,
      inventory INTEGER,
      category_id INTEGER REFERENCES category(id)
    )
    `);

    //ORDERS TABLE
    console.log("orders");
    await client.query(`
    CREATE TABLE orders(
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      total_price INTEGER,
      status BOOLEAN DEFAULT false
    )
    `);

    //CART ITEMS TABLE
    console.log("cart items");
    await client.query(`
    CREATE TABLE cart_items(
      id SERIAL PRIMARY KEY,
      order_id INTEGER REFERENCES orders(id),
      product_id INTEGER REFERENCES products(id),
      quantity INTEGER,
      price INTEGER
    )
    `);
  } catch (error) {
    console.log(error);
  }
}

async function populateTables() {
  console.log("Populating tables...");
  try {
    //users
    for (const user of users) {
      console.log("Users:", users);
      await createUser(user);
    }
    console.log("users created!");

    //cateorgies
    for (const category of categories) {
      console.log("Categories:", categories);
      await createCategories(category);
    }
    console.log("categoires created!");
    //products
    for (const product of products) {
      console.log("Products:", products);
      await createProducts(product);
    }
    console.log("products created!");

    //orders
    for (const order of orders) {
      console.log("Orders:", orders);
      await createOrders(order);
    }
    console.log("orders created!");

    //cart-items
    for (const cart_item of cart_items) {
      console.log("cart_items:", cart_items);
      await createCartItem(cart_item);
    }
    console.log("cart items created!");
  } catch (error) {
    console.error(error);
  }
}

async function rebuildDb() {
  client.connect();
  try {
    await dropTables();
    await createTables();
    await populateTables();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDb();
