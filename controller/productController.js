const Product = require("../model/product")

exports.postProduct = async (req, res) => {
    try {
        const productExist = await Product.findOne({ title: req.body.title })
        if (productExist) return res.status(500).json({ errors: true, message: "product already exist" })

        const data = await Product.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.getProduct = async (req, res) => {
    try {
        const data = await Product.find().populate("category")
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}