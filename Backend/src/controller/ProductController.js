const express=require("express")
const router=express.Router();

const Products=require("../models/Product")

//Crud
router.get("/",async(req,res)=>{
    try {
        const products=await Products.find().lean().exec();
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
})

router.post("/",async(req,res)=>{
    try {
        const product=await Products.create(req.body)
        res.status(201).send(product)
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const OneProd=await Products.findById(req.params.id).lean().exec()
        res.status(200).send(OneProd)
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
})

// router.patch("/:id",async(req,res)=>{
//     try{
//         const Prod=await Products.findByIdAndUpdate(req.params.id)
//         res.status(200).send(Prod)
//     }catch(err){
//         res.status(500).send({msg:err.message})
//     }
// })
// router.delete("/:id",async(req,res)=>{
//     try{
//         const prod=await Products.findByIdAndDelete(req.params.id)
//         res.status(200).send(prod)
//     }
//     catch(err){
//         res.status(500).send({msg:err.message})
//     }
// })

module.exports=router;