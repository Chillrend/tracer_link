// Import Sequelize
require('dotenv').config();
const { Sequelize } = require('sequelize');


// Create a new Sequelize instance with your database credentials
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    port: process.env.DATABASE_PORT,
    schema: process.env.DATABASE_SCHEMA,
    logging: process.env.debug,
});

// Export the Sequelize instance as a module
module.exports = sequelize;