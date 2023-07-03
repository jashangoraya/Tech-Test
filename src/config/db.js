module.exports = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  db: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432,
}; 