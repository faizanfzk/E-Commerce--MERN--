const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    name:{type:String},
  Type:{type:String},
    price:{type:String},
    description:{type:String},
    images:{type:[String]},
    rating:{type:String}



})
const Product=mongoose.model("products",productSchema)
module.exports=Product