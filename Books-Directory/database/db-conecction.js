const Sequelize = require('sequelize')
const dbConfig = require('./config')

const sequelize = new Sequelize(dbConfig.development)

const connectPSQL = async () => {

    await sequelize.authenticate()
            .then(() => {
                console.log("Conexion exitosa")
            })
            .catch((error) => {
                console.log('Error', error)
            })
}

module.exports = {
    connectPSQL
}
