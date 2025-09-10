const { postCategory, getCategory, updateCategory, deleteCategory } = require("../controller/categoryController")
const admin = require("../middleware/admin")
const auth = require("../middleware/auth")
const route = require("express").Router()

route.post("/",[auth,admin],postCategory)
route.get("/",getCategory)
route.put("/:id",[auth,admin],updateCategory)
route.delete("/:id",[auth,admin],deleteCategory)

module.exports = route