const mongoose = require("mongoose");

const cartSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:"true"

    },
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:"true"
  
    }]
})

const Cart= mongoose.model("cart",cartSchema);
module.exports=Cart;