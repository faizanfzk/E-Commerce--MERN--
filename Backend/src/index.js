const express=require("express")
require("dotenv").config();
const connect=require("./configs/db")
const app=express();
const cors=require("cors")

const productController=require("./controller/ProductController")
const cartController=require("./controller/CartController")

app.use(express.json())
app.use(cors())

app.use("/products", productController)
app.use("/cart",cartController)



//module.export=app;
app.listen(process.env.PORT || 5050,async()=>{
    try {
        await connect()
      
    } catch (error) {
        console.log(error)
    }
    console.log("Listening on port 5050")
})