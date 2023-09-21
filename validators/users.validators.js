const Joi = require('joi')

const schema = Joi.object().keys({
    userName: Joi.string().min(3).max(30).required().messages({
        "string.base":"Username debe de ser una cadena de caracteres",
        "string.empty":"Username no debe de ser vacío",
        "string.min":"Username debe tener un mínimo de {#limit} caracteres",
        "any.required":"El campo Username es requerido"
    }),
    email:Joi.string().email().required().messages({
        "string.email":"El email debe de ser un email válido",
    }),
    phoneNumber: Joi.number().required(),
    password:Joi.string().min(3).max(30).required(),
})

module.exports = { schema };