const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: '0689',
    host: 'localhost',
    port: 5432,
    database: "movies"
})

module.exports = pool