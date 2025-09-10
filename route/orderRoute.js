const {getOrder,postOrder} = require("../controller/orderController")
const auth = require("../middleware/auth")
const route = require("express").Router()

route.post("/",auth,postOrder)
route.get("/",getOrder)


module.exports = route