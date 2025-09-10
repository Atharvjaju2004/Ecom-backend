const{postUser,loginUser,updateUser,deleteUser} = require("../controller/userController")

const route = require("express").Router()

route.post("/",postUser)
route.post("/login",loginUser)
route.put("/:id",updateUser)
route.delete("/:id",deleteUser)

module.exports = route