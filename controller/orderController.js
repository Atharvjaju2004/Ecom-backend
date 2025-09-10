const Order = require("../model/order")

exports.getOrder = async (req,res) => {
    try {
        const data = await Order.find().populate("user").populate("cart")
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postOrder = async (req,res) => {
    try {
        const data = await Order.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}