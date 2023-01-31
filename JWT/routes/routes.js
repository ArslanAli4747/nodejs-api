const {login,dasboard} = require("../controllers/controller")
const auTH = require("../middlewares/auth")
const express = require("express")
const router = express.Router()



router.route("/login").post(login)
router.route("/dashboard").get(auTH, dasboard)


module.exports = router