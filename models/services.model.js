const { Schema, model } = require('mongoose')

const ServiceSchema = new Schema({
    name:{
        type: String,
        require: true,
        enum: ['NORMAL', 'PREMIUM']
    },
    active:{
        type: Boolean,
        default: true
    },
    price:{
        type: Number,
        require: true
    }
})

module.exports = model('Service', ServiceSchema)