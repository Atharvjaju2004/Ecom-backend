const Cart = require("../model/cart")

exports.getCart = async (req,res) => {
    try {
        const data = await Cart.find().populate("user")
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postCart = async (req,res) => {
    try {
        const data = await Cart.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}