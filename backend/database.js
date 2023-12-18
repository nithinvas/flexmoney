const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Nithinvas@321',
  database: 'flex',
  insecureAuth: true,
});

const queryAsync = async (sql, values) => {
  try {
    const [rows, fields] = await pool.execute(sql, values);
    return rows;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};

module.exports = {
  queryAsync,
};



