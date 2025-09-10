const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
   product:{
    type:Array,
    required:true
   },

   user:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:"user"
   }
   
}, {
    timestamps: true
})

module.exports = mongoose.model("cart", cartSchema)