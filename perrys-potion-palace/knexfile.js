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
          user: process.env.USERNAME,
          host: 'db.bit.io',
          database: `${process.env.USERNAME}/${process.env.DATABASE}`,
          password: process.env.PASSWORD,
          port: 5432,
          ssl: true
        },
    },
};
