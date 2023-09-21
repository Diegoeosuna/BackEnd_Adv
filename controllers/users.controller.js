const { response, request } = require('express')

//Model - Schema
const User = require('../models/user.model')
const {schema} = require('../validators/users.validators')

//Read
const userGet = async(req = request, res = response) => {
    try {
        const  queryParam = {state:true};
        const { limite = 10 } = req.query
        const NumeroEntradas = await User.countDocuments()
        const usuario = await User.find(queryParam).populate("service").limit(Number(limite));
        res.status(200).json({
            total: NumeroEntradas,
            usuario
            })
    } catch (error) {
        res.status(500).json({
            message: 'Algo ocurrió cuando buscabas a usuarios.'
        })
        
    }

}

//Create
async function userPost(req = request, res = response) {

    try {
        const { userName, email, phoneNumber, password, state, service, address } = req.body
        const data = { userName, email, phoneNumber, password, state, service, address }

        // const { error } =schema.validate(req.body)

        // if(error){
        //     return res.status(400).json({
        //         message:error.details[0].message
        //     })
        // }

        const user = new User(data)
        await user.save()

        res.status(200).json({
            message: 'Usuarios Route desde el controller - POST',
            user
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error en el servidor',
            error
        })
    }

}

//Update
const userPut = async(req = request, res) => {
  
    try {
        const { id } = req.params;
        const { userName, email, phoneNumber, password, state, service } = req.body;
        const data = { userName, email, phoneNumber, password, state, service}

        const user = await User.findByIdAndUpdate(id, data)

        res.status(200).json({
            message: 'Usuarios Route desde el controller - PUT',
            ok:true
            })

    } catch (error) {
        res.status(500).json({
            message: 'Algo salió mal cuando intentamos actualizar el usuario.'
        })
    }
    

}

//Delete, si borramos objetos que tienen dependencias, pueden crear discrepancias más tarde. Se necesitaría hacer un "soft delete" o borrado lógico.
const userDel = async(req = request, res = response) => {
    try {
        const { id } = req.params
        const falseState = {state:false}
        const user = await User.findByIdAndUpdate(id, falseState)
        
        res.status(200).json({
            message: `El usuario con ID ${id}, fue eliminado.`
        })
    } catch (error) {
        res.status(500).json({
            message: 'Algo salió mal cuando intentamos actualizar el usuario.'
        })
    }
    


}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDel
}