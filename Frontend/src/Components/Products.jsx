import React, { useEffect,useState } from "react"
import { Box, Flex } from "@chakra-ui/react"

import axios from "axios"

import { Link as RouterLink} from "react-router-dom"
import { Navbar } from "./Navbar"
 import { Footer } from "./Footer"


import {

  Link,
    Image,
  } from '@chakra-ui/react';


export const Products=()=>{
  const [data,setData]=useState([])
  const[loading,setLoading]=useState(false)
  const [error,setError]=useState(false)

  useEffect(()=>{
    setLoading(true)
     axios({
        url:"https://ecomerce-mern.herokuapp.com/products",
        method:"GET"
    })
    .then((res)=>{
        setLoading(false)
        setData(res.data)
        
    })
    .catch((err)=>{
        setError(true)
        console.log(err.message)
    })
  },[])


    return(
        <Box>
   
     <Box>
    <Navbar/>
       
      <div style={{textAlign:"center" ,fontSize:"30px",fontWeight:"bold",color:"teal"}}> {loading && <div>...Loading</div>}</div>
      <div style={{textAlign:"center" ,fontSize:"30px",fontWeight:"bold",color:"teal"}}> {error && <div>...Something Went Wrong</div>}</div>
         <Flex flexWrap="wrap" justifyContent="space-between">
             {data.map((e)=>{
                 return(
                     <Link as={RouterLink} to={`/products/${e._id}`}>
                      <div style={{display:"flex",border:"1px solid yellow",marginBottom:"5px",justifyContent:"space-between",width:"300px",boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}} key={e._id}>
                <div style={{width:"300px",fontWeight:"bold",margin:"5px"}}>
                <img style={{height:"300px",width:"290px"}} src={e.images[0]} alt="products" />            
                    <div style={{display:"flex",justifyContent:"space-around",color:"yellowgreen"}}>
                <p style={{width:"100px"}}>₹ {e.price}</p>
                <p>{e.name}</p>        
                </div>                        
                </div>
                </div>
                   

             </Link>
                 )
             })}
         </Flex>
       
         </Box>
     
   
     <Footer/>
 </Box>
    )
}