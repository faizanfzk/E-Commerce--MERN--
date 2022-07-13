const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://faizanfzk:faizan123@cluster0.oh8gy97.mongodb.net/E-Commerce?retryWrites=true&w=majority")
}