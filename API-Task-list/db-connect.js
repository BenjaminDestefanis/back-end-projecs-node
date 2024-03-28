require('dotenv').config();
const { DB_USER, DB_PASSWORD } = process.env;
const mongoose = require('mongoose');
const colors = require('colors')

const dbUri = `mongodb+srv://benjaminisraelb:CRsCSxmG1A36k1jH@tasklistdb.omwu7qi.mongodb.net/`;

const mongoConnect = async () => {
    try{
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
    })
    
    console.log('Conexión exitosa a la base de datos.'.green)
  
} catch(error) {
    console.log('Error de conexión a la base de datos:'.red , error)
}};

mongoConnect()

const db = mongoose.connection;

module.exports = db;