const express = require("express")
const { postUser, userLogin } = require("../controllers/user.controller")
const router = express.Router()

router.post('/login' , userLogin)
router.post('/addUser', postUser)

module.exports = router
