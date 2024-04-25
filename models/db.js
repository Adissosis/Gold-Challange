const Sequelize = require('sequelize');
const config = require('./init-models');

const sequelize =  new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres"
    }
);

const AllModels = config.initModels(sequelize);
module.exports = AllModels;