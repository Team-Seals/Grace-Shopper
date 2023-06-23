const client = require("../client");

/* USERS */
async function createUser(userObj) {
  console.log("probe 2");
  try {
    const {
      rows: [user],
    } = await client.query(
      `
          INSERT INTO users(username, password) 
          VALUES($1, $2) 
          ON CONFLICT (username) DO NOTHING 
          RETURNING *;
        `,
      [userObj.username, userObj.password]
    );
    console.log("createuser log:", user);
    return user;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  try {
    const { rows } = await client.query(`
        SELECT id, username, password
        FROM users;
      `);

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getUser(username, password) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT id, username from users WHERE username=$1 AND password=$2;
        `,
      [username, password]
    );
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(`
        SELECT username from users WHERE id=${id}
        `);
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByUsername(username) {
  try {
    console.log("testing username string", username);
    const {
      rows: [user],
    } = await client.query(
      `
        SELECT * from users WHERE username=$1;
        `,
      [username]
    );
    if (!user) {
      console.log("userByUsername log;", user);
      return null;
    }
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByUsername,
  getUser,
};
