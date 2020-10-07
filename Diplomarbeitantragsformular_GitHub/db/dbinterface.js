const { pool } = require("./connect");
const SQL = require("sql-template-strings");

async function getLehrer() {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT * FROM lehrer ORDER BY id DESC");
    return res.rows;
  } catch (error) {
    console.error(error);
  } finally {
    client.release();
  }
}

async function getKlassen() {
  const client = await pool.connect();
  try {
    const res = await client.query("SELECT * FROM klasse");
    return res.rows;
  } catch (error) {
    console.error(error);
  } finally {
    client.release();
  }
}
module.exports = {
  getLehrer,
  getKlassen,
};
