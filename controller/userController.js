const User = require("../model/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

exports.postUser = async (req, res) => {
    try {
        const userExist = await User.findOne({ email: req.body.email })
        if (userExist) return res.status(500).json({ errors: true, message: "user already exist" })

        req.body.password = await bcrypt.hash(req.body.password, 10)

        const data = await User.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const userExist = await User.findOne({ email: req.body.email })
        if (!userExist) return res.status(500).json({ errors: true, message: "email or password invalid" })
        console.log(userExist);

        const comparePassword = await bcrypt.compare(req.body.password, userExist.password)
        if (!comparePassword) return res.status(500).json({ errors: true, message: "email or password invalid" })
        console.log(comparePassword);

        const token = await jwt.sign({ _id: userExist._id, role: userExist.role }, process.env.SEC)
        return res.json({ errors: false, data: { token: token, user: userExist } })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.body.email, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}