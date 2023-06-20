const client = require("../client");

/* USERS */
async function createUser({ email, password }) {
  try {
    console.log("Starting to insert USER into db");
    const {
      rows: [user],
    } = await client.query(
      `
        INSERT INTO users(email, password)
        VALUES ($1, $2)
        ON CONFLICT (email) DO NOTHING
        RETURNING *;
        `,
      [email, password]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
};
