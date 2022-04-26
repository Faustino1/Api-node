//Creamos las rutas para mostrarlas en pantalla
import express from "express";
import { createUsuario, deleteUsuario, getAllUsuarios, getUsuario, updateUsuario } from "../controladores/controller.js";

const router = express.Router()
//Mostramos todos los Usuarios
router.get('/', getAllUsuarios)

//Traemos un metodo en particular
router.get('/:id', getUsuario)
//Para crear usuario
router.post('/', createUsuario)

//Para actualizar
router.put('/:id', updateUsuario)

//Para eliminar el usuario
router.delete('/:id', deleteUsuario)

export default router