module.exports = {
  development: {
    username: "postgres",
    password: null,
    database: "pasteleiro_db_development",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: 0
  },
  test: {
    username: "root",
    password: null,
    database: "pasteleiro_db_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: 0
  },
  production: {
    use_env_variable: "DATABASE_URL"
  }
}
