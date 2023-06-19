const client = require("./client");

async function dropTables() {
  console.log("Dropping tables...");
  try {
  } catch (error) {
    console.error(error);
  }
}

async function createTables() {
  console.log("Creating tables...");
  try {
    //USER TABLE
    console.log("users");
    await client.query(`
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) UNIQUE NOT NULL
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

    //CATEGORY TABLE
    console.log("categories");
    await client.query(`
    CREATE TABLE category(
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL
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
