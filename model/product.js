const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    thumbnail: {
        type: String,
        required: true
    },

    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "category"
    },

    description: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("product", productSchema)