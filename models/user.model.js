const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    userName:{
        type:String,
        required:[true, "El Username es requerido"]
    },
    email:{
        type:String,
        required:[true, "El Email es requerido"]
    },
    phoneNumber:{
        type:Number
    },
    password:{
        type:String,
        required:[true, "La contraseña es requerida"]
    }
})

module.exports = model('User', UserSchema)