const {getProduct,updateProduct,deleteProduct,postProduct} = require("../controller/productController")
const admin = require("../middleware/admin")
const auth = require("../middleware/auth")
const route = require("express").Router()
 route.get("/",getProduct)
 route.post("/",[admin,auth],postProduct)
 route.put("/:id",[admin,auth],updateProduct)
 route.delete("/:id",[admin,auth],deleteProduct)

 module.exports = route