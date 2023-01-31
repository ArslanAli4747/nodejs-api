const {login,signup} = require("../controllers/userController")
const express = require("express")
const router = express.Router()

router.post('/register', signup)
router.post('/login', login)

module.exports = router