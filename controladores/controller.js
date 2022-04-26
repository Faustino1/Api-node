//importo el modelo que cree en la tabla modelo
import usuarioModelo from "../modelo/modelo.js";

//Metodos para el crud, eliminar, actualizar y crear

//Mostrar todos los usuarios
//uso la funcion asyncrona y con el metodo findAll para que me traiga todos los usuarios
 export  const getAllUsuarios = async (req, res) =>{
    try{
        const dataAll= await usuarioModelo.findAll()
        res.json(dataAll)
    }catch(error){
        res.json({message: error.message})
    }
 }

 //Mostrar un registro en particular
 //Trae todos los regitros pero le declaro una clausula where para capturar el id y me lo muestre
 export  const getUsuario = async (req, res) =>{
    try{
    const data = await usuarioModelo.findAll({
         where:{id:req.params.id }
     })
     res.json(data[0])
    }catch(error){
        res.json({message: error.message})
    }
}

//Crear un usuario
export const createUsuario = async (req, res)=>{
    try {
      await usuarioModelo.create(req.body)
      res.json({"message": "¡Usuario creado correctamente!"})
    } catch (error) {
        res.json({message: error.message})
        
    }
}

//Actualizar un usuario
export const updateUsuario = async (req, res)=>{
    try {
       await usuarioModelo.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({"message": "¡Usuario actualizado correctamente!"})
    } catch (error) {
        
    }
}

//Eliminar un usuario
export const deleteUsuario = async (req, res)=>{
    try {
       await usuarioModelo.destroy({
            where: {id: req.params.id}
        })
        res.json({"message": "¡Usuario eliminado correctamente!"})
    } catch (error) {
        
    }
}