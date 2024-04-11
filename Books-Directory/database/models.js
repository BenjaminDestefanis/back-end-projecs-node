const Sequelize = require("sequelize")
const dbConfig = require("./config")

const sequelize = new Sequelize(dbConfig.development)

const Book =  sequelize.define('Book',{
    name: Sequelize.STRING,
    year: Sequelize.NUMBER,
    author: Sequelize.STRING
});