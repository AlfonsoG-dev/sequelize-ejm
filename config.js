const dotenv = require('dotenv')
dotenv.config();
dotenv.load;

const config = {
    pool: {
        host: process.env.DB_HOST,
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS,
        database: process.env.DB,
        max: 5,
        min: 1,
        idle: 60000,
        acquire: 10000,
        dialect: 'mysql'
    }
}

module.exports = config