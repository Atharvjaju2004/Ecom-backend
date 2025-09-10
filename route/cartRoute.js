const {getCart,postCart} = require("../controller/cartController")
const admin = require("../middleware/admin")
const auth = require("../middleware/auth")
const route = require("express").Router()


route.get("/",getCart)
route.post("/",[admin,auth],postCart)

module.exports = route