const { response, request } = require('express')

//Model - Schema
const Service = require('../models/services.model')

//Read
const serviceGet = async(req = require, res = response) => {
    try {
        const  queryParam = {state:true}
        const { limite = 10 } = req.query
        const numeroEntradas = await Service.countDocuments()
        const servicio = await Service.find(queryParam).limit(Number(limite))
        res.status(200).json({
            total: numeroEntradas,
            servicio
            })
    } catch (error) {
        res.status(500).json({
            message: 'Algo ocurrió cuando buscabas a usuarios.',
            error
        })
        
    }
}

//Create
const servicePost = async(req = require, res = response) => {
    
    try {
        const { name, active, price } = req.body
        const data ={name, active, price}
    
        const service = new Service(data)
        await service.save()

        res.status(200).json({
            message: 'Servicios Route desde el controller - POST',
            service
            })

    } catch (error) {
        res.status(500).json({
            message: 'Algo ocurrió cuando buscabas a usuarios. -- POST',
            error
        })
        
    }
}

//Update
const servicePut = async(req = request, res) => {
    try {
        const { id } = req.params;
        const { name, active, price  } = req.body;
        const data = { name, active, price  }

        const service = await Service.findByIdAndUpdate(id, data)
        res.status(200).json({
            message: 'Usuarios Route desde el controller - PUT',
            ok:true
            })
    } catch (error) {
        res.status(500).json({
            message: 'Algo ocurrió cuando buscabas a usuarios.',
            error
        })
        
    }
}

//Delete, si borramos objetos que tienen dependencias, pueden crear discrepancias más tarde. Se necesitaría hacer un "soft delete" o borrado lógico.
const serviceDel = async(req = request, res = response) => {
    try {
        const { id } = req.params
        const falseActive = {active:false}
        const service = await Service.findByIdAndUpdate(id, falseActive)
        res.status(200).json({
            message: `El usuario con ID ${id}, fue eliminado.`
            })
    } catch (error) {
        res.status(500).json({
            message: 'Algo ocurrió cuando buscabas a usuarios.',
            error
        })
        
    }
}

module.exports = {
    serviceGet,
    servicePost,
    servicePut,
    serviceDel
}