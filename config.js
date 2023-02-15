const config = {
    pool: {
        host: 'localhost',
        username: 'root',
        password: '5x5W12',
        database: 'consulta',
        max: 5,
        min: 1,
        idle: 60000,
        acquire: 10000,
        dialect: 'mysql'
    }
}

module.exports = config