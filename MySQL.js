const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "authentication",
});

const connection = async function () {
  try {
    pool.getConnection((err) => {
      if (err) throw err;
      console.log("connected");
    });
  } catch (err) {
    console.log(err);
  }
};

connection()
  .then(() => {
    console.log("Connected to DB server");
  })
  .catch((err) => {
    console.log(err);
  });

const users = {
  async createUser(username, password) {
    const [row] = await pool.query(
      "insert into users (username, password) values (?, ?)",
      [username, password]
    );
    return row.insertId;
  },
  async getUser(username) {
    const [row] = await pool.query(
      "select * from users where username = ?",
      username
    );
    return row[0];
  },
  async getUserById(id) {
    const [row] = await pool.query("select * from users where id = ?", id);
    return row[0];
  },
};

module.exports = users;
