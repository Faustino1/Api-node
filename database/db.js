//CONEXION A LA BASE DE DATOS CON SEQUELIZE
import sequelize from "sequelize";
//Defino la instancia de sequelize para la conexion de la bd
const db = new sequelize ('pruebausuarios', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})

export default db