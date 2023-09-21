const { Router } = require('express');

const { userGet, userPost, userPut, userDel } = require('../controllers/users.controller');
const { celebrateValidator } = require('../middlewares/celebrateValidator');
// const { errors, celebrate } = require('celebrate') -- Esta información se re localiza en server --

const router = Router()

//CRUD
router.post("/",celebrateValidator, userPost); //C
router.get("/", userGet); //R
router.put("/:id", userPut); //U
router.delete("/:id", userDel); //D
// router.use(errors()) 


module.exports = router