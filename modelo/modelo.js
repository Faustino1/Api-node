//importamos la conexion a la base de datos 
//importamos sequelize

import DataTypes  from "sequelize";
import db from "../database/db.js";
//defino la conexion a la tabla usuarios
const usuarioModelo = db.define('usuarios',{
    nombre: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
})
export default usuarioModelo
