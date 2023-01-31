const {getAllProducts,getAllProductsStatic} = require("../controller/controller")

const express =require("express")
const router = express.Router()


router.route("/").get(getAllProducts)
router.route("/static").get(getAllProductsStatic)


module.exports = router