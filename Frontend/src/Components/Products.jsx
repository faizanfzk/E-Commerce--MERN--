import React, { useEffect,useState } from "react"
import { Box,Text, Flex } from "@chakra-ui/react"

import axios from "axios"

import { Link as RouterLink} from "react-router-dom"
import { Navbar } from "./Navbar"
 import { Footer } from "./Footer"
 import { Spinner } from '@chakra-ui/react'
 import { Select } from '@chakra-ui/react'
import {

  Link,
    Image,
  } from '@chakra-ui/react';
  import { useSelector, useDispatch } from 'react-redux';
  import { fetchData } from "../Redux/Products/action" 
  import { useSearchParams } from "react-router-dom"

export const Products=()=>{
 
  const [sort,setSort]=useState("asc")


  const items = useSelector((store) => store.ecommerceData);
let  data=items.products;
let loading=items.loading;
let error=items.error;

console.log(data)
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
      if(data?.length === 0)
      {
          let params = {
              category: searchParams.getAll('category')
          }
          dispatch(fetchData(params));
      }
  },[dispatch, data?.length, searchParams]);
  

const handleSort=(e)=>{
setSort(e.target.value)
}
sort=="asc" ? data.sort((a,b)=>a.price-b.price):data.sort((a,b)=>b.price-a.price);
    return(
        <Box>
  
   
     <Box>
    <Navbar/>
       
      <div style={{textAlign:"center" ,fontSize:"30px",fontWeight:"bold",color:"teal"}}> {loading && <div>Loading  <Spinner size='xl' /></div>}</div>
      <div style={{textAlign:"center" ,fontSize:"30px",fontWeight:"bold",color:"teal"}}> {error && <div>...Something Went Wrong</div>}</div>
        <Box> 
          <Text pl={"15px"}>Sort By Price</Text> 
              
        <Select w={"150px"} pl={"8px"}  value={sort} onChange={handleSort}>
       
  <option value='asc'>Low to High</option>
  <option value='desc'>High to Low</option>
 
</Select>
</Box>

        
         <Flex flexWrap="wrap" justifyContent="space-between">
             {data.map((e)=>{
                 return(
                     <Link style={{textDecoration:"none"}} as={RouterLink} to={`/products/${e._id}`}>
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