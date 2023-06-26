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

async function getCategoryById(categoryId) {
  try {
    const {
      rows: [category],
    } = await client.query(
      `
        SELECT * FROM categories
        WHERE id = $1;
      `,
      [categoryId]
    );
    return category;
  } catch (error) {
    throw error;
  }
}

async function updateCategory(categoryId, { name }) {
  try {
    const {
      rows: [category],
    } = await client.query(
      `
        UPDATE categories
        SET name = $1
        WHERE id = $2
        RETURNING *;
      `,
      [name, categoryId]
    );

    if (!category) {
      return null;
    }

    return category;
  } catch (error) {
    throw error;
  }
}

async function deleteCategory(categoryId) {
  try {
    const {
      rows: [category],
    } = await client.query(
      `
        DELETE FROM categories
        WHERE id = $1
        RETURNING *;
      `,
      [categoryId]
    );

    if (!category) {
      return null;
    }

    return category;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
