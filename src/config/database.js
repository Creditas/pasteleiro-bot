module.exports = {
  development: {
    username: "postgres",
    password: null,
    database: "pasteleiro_db_development",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: null,
    database: "pasteleiro_db_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DATABASE_URL,
    dialect: "postgres",
    operatorsAliases: false
  }
}
