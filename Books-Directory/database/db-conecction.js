const Sequelize = require('sequelize')
const dbConfig = require('./config')

const sequelize = new Sequelize(dbConfig.development)

const connectPSQL = async () => {

    await sequelize.authenticate()
            .then(() => {
                console.log("Conexion exitosa".green)
            })
            .catch((error) => {
                console.log(`Error: ${error}`.red)
            })
}

module.exports = {
    connectPSQL,
}
