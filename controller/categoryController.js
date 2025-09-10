const Category = require("../model/category")

exports.postCategory = async (req, res) => {
    try {
        const categoryExist = await Category.findOne({ name: req.body.name })
        if (categoryExist) return res.status(500).json({ errors: true, message: "Category already exists" })

        const data = await Category.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.getCategory = async (req, res) => {
    try {
        const data = await Category.findOne()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const data = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const data = await Category.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, message: "Category deleted successfully" })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

