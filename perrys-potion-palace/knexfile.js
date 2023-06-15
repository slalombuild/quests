// DO NOT CHANGE THIS FILE
require("dotenv").config();

const DATABASE_URL = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}?sslmode=require`;

module.exports = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    pool: { min: 2, max: 10 },
    connection: DATABASE_URL,
  },
};
