const { response, request } = require('express')

const User = require('../models/user.model')


const userGet = (req, res = response) => {
    res.status(200).json({message: 'Usuarios Route desde el controller'})
}

const userPost = async(req = require, res = response) => {
    const { userName, email, phoneNumber, password } = req.body
    const data ={userName, email, phoneNumber, password}

    const user = new User(data)
    await user.save()

    res.status(200).json({
        message: 'Usuarios Route desde el controller - POST',
        user
})
}

const userPut = (req = request, res) => {
    const id = req.params.id;

    res.status(200).json({
        message: 'Usuarios Route desde el controller - PUT',
    id
})
}

const userDel = (req = request, res = response) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Usuarios Route desde el controller - DELETE',
        id
})
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDel
}