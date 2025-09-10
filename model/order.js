const mongoose = require("mongoose")

const ordrSchema = new mongoose.Schema({
    cart: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"cart"
    },

    user: {
        type: mongoose.SchemaType.ObjectId,
        ref:"user"
    },

    totalAmount:{
        type:Number,
    },

    status: {
        type: String,
        default:"pending"
    }
   
}, {
    timestamps: true
})

module.exports = mongoose.model("order", orderSchema)