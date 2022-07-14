import React, { useEffect } from "react"
import { Box, Flex } from "@chakra-ui/react"
// import { FilterComponents } from "../Components/FilterComponent"
import { useDispatch, useSelector } from "react-redux"
import {useSearchParams , Link as RouterLink} from "react-router-dom"
import { Navbar } from "./Navbar"
 import { Footer } from "./Footer"
import { fetchData } from "../Redux/Products/action"
import { Stack } from "@chakra-ui/react"
import {

    Center,
    useColorModeValue,
    Heading,
    Text,
  Link,
    Image,
  } from '@chakra-ui/react';


export const Products=()=>{
    const products=useSelector(store=>store.ecommerceData.products)
    // const authStatus=useSelector(store=>store.authReducer.auth)
    // console.log(authStatus)
    console.log(products)
    const dispatch=useDispatch()
    const [searchParams]=useSearchParams()

    useEffect(()=>{
        if(products.length===0){
            let params={
                category:searchParams.getAll("category")

            }
           dispatch(fetchData(params))
        }
    },[dispatch,products.length,searchParams])
    // console.log(products)

    return(
        <Box>
            <Stack display={{ md:"flex" }} flexDirection={{ md:"row" }}>
     {/* <Box minWidth={"15rem"}>
         <FilterComponents/>
     </Box> */}
     <Box>
    <Navbar/>
       
       
         <Flex flexWrap="wrap" justifyContent="space-between">
             {products.map((e)=>{
                 return(
                     <Link as={RouterLink} to={`/products/${e.name}`}>
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
     
     </Stack>
     <Footer/>
 </Box>
    )
}