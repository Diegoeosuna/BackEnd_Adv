const { required } = require('joi');
const { Schema, model } = require('mongoose');

const AdressSchema = Schema ({
    street:{
        type:String
    },
    number:{
        type: Number
    },
    city:{
        type:String
    }
})

const UserSchema = Schema({
    userName:{
        type:String,
        required:[true, "El Username es requerido"],
        unique:true
    },
    email:{
        type:String,
        required:[true, "El Email es requerido"],
        unique:true
    },
    phoneNumber:{
        type:Number
    },
    password:{
        type:String,
        required:[true, "La contraseña es requerida"]
    },
    state:{
        type:Boolean,
        default: true
    },
    service:{
        type: Schema.Types.ObjectId,
        ref:'Service',
        required:[true, 'El servicio es requerido']
    },
    adress:{
        type: AdressSchema,
        required:[true, "La dirección es requerida"]
    }
})

module.exports = model('User', UserSchema) //Se exporta en singular y con mayúscula.