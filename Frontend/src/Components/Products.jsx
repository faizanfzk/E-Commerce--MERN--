import { useState,useEffect } from "react"
import axios from "axios"


export const Products = () => {
    const [data,setData]=useState([])
    useEffect(() => {
   axios({
    url:"https://ecomerce-mern.herokuapp.com/products",
    method:"GET"
   })
   .then((res)=>{
    setData(res.data)
    console.log(res.data)
   })
   .catch((err)=>{
    console.log(err)
   })
      
    },[])
    console.log(data)
   
  return (
    <div style={{width:"100%", display:"grid",gridTemplateColumns:"repeat(4,250px)",justifyContent:"space-around"}} >
        {data.map((e)=>{
            return(
               <div style={{display:"flex",border:"1px solid yellow",marginBottom:"5px",justifyContent:"space-between",width:"300px",boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} key={e._id}>
                <div style={{width:"300px",fontWeight:"bold",margin:"5px"}}>
                <img style={{height:"300px",width:"290px"}} src={e.images[0]} alt="products" />
               
                    <div style={{display:"flex",justifyContent:"space-around",color:"yellowgreen"}}>
                <p style={{width:"100px"}}>₹ {e.price}</p>
                <p>{e.name}</p>
           
                </div>
                
              
                </div>
                </div>
            )
        })}
    </div>
  )
}
