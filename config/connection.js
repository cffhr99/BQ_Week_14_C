const Sequelize = require('sequelize');

require('dotenv').config();


const JAWSDB_URL='mysql://orqao9wv121ufy3b:ogp4tq9x3btkyfhj@s29oj5odr85rij2o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ss66neixamdq4o9q'

// create connection to our db
// const sequelize = JAWSDB_URL
//   ? new Sequelize(JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306
//     });
const sequelize = new Sequelize(JAWSDB_URL)

module.exports = sequelize;
