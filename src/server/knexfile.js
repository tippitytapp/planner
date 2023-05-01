require('dotenv').config();
const pgConnection = process.env.DATABASE_URL;
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'moneyHoneys',
      user: 'postgres',
      password: 'marctapp'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  production: {
    client: 'postgresql',
    connection: pgConnection,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};