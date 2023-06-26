const client = require("../client");

async function createCategories({ name }) {
  try {
    console.log("Starting to insert CATEGORIES into db");
    const {
      rows: [category],
    } = await client.query(
      `
        INSERT INTO categories(name)
        VALUES ($1)
        RETURNING *;
        `,
      [name]
    );
    return category;
  } catch (error) {
    throw error;
  }
}

async function getAllCategories() {
  try {
    console.log("Starting to get all categories");
    const {
      rows: [category],
    } = await client.query(
      `
      SELECT *
      FROM categories;
      `
    );
    return category;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCategories,
  getAllCategories,
};
