import express  from "express";
import cors from "cors";
//Importamos la conexión a la base de datos 
import db from "./database/db.js";
//Importamos las rutas de las peticiones get, post, delete y put
import router from "./routas/routs.js";

const app = express()

//Configuramos cors y uso la ruta usuarios como referencia
app.use(cors())
app.use(express.json())
app.use('/usuarios', router)

//Creamos la conexión
try {
    db.authenticate()
    console.log("Conexión exitosa a la base de datos");
} catch (error) {
    console.log(`El error a la base de datos es: ${error}`);
}

//Por donde se va a ejecutar el servidor: puerto 3001
app.listen(3001, ()=>{
    console.log("Este es el puerto:http://localhost:3001/");
})