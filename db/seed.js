const client = require("./client");
// imports
const { createUser } = require("./adapters/users");
const { createProduct } = require("./adapters/products");
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
      DROP TABLE IF EXISTS categories;
      DROP TABLE IF EXISTS users;
    `);
  } catch (error) {
    console.error(error);
  }
}

async function createTables() {
  console.log("Creating tables...");
  try {
    // USERS TABLE
    console.log("users");
    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `);

    // CATEGORIES TABLE
    console.log("categories");
    await client.query(`
      CREATE TABLE categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL
      )
    `);

    // PRODUCTS TABLE
    //add colorway
    console.log("products");
    await client.query(`
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        size INTEGER,
        image_url TEXT,
        price INTEGER,
        inventory INTEGER,
        category_id INTEGER REFERENCES categories(id)
      )
    `);

    // ORDERS TABLE
    console.log("orders");
    await client.query(`
    CREATE TABLE orders(
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      status BOOLEAN DEFAULT true
    )
    `);

    console.log("cart items");
    await client.query(`
        CREATE TABLE cart_items (
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
    // USERS
    console.log("users");
    for (const user of users) {
      console.log("Users:", users);
      await createUser(user);
    }
    console.log("users created!");

    // CATEGORIES
    console.log("categories");
    for (const category of categories) {
      console.log("Category:", category);
      await createCategories(category);
    }
    console.log("categories created!");

    // PRODUCTS
    console.log("products");
    for (const product of products) {
      console.log("Product:", product);
      await createProduct(product);
    }
    console.log("products created!");

    // ORDERS
    console.log("orders");
    for (const order of orders) {
      console.log("Order:", order);
      await createOrders(order);
    }
    console.log("orders created!");

    // CART ITEMS
    console.log("cart items");
    for (const cart_item of cart_items) {
      console.log("Cart Item:", cart_item);
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
