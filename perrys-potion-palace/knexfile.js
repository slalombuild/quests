// DO NOT CHANGE THIS FILE
require("dotenv").config();

const sharedConfig = {
  client: "postgresql",
  useNullAsDefault: true,
  migrations: { directory: "./data/migrations" },
  pool: { min: 2, max: 10 },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      user: process.env.USERNAME_BIT_IO,
      host: "db.bit.io",
      database: `${process.env.USERNAME_BIT_IO}/${process.env.DATABASE}`,
      password: process.env.PASSWORD_BIT_IO,
      port: 5432,
      ssl: true,
    },
  },
};
