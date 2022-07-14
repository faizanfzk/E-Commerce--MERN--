import {Box} from "@chakra-ui/react"
import {Routes,Route} from "react-router-dom"
import { Home } from "../Components/Home"
import { Product } from "../Components/Product"
import { Products } from "../Components/Products"


export const AllRoutes=()=>{

    return(
        <Box>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:_id" element={<Product/>}/>
                {/* <Route path="/cart" element={<Cart/>}/> */}
                {/* <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/> */}
                {/* <Route path="/checkout" element={<Checkout/>}/> */}
                
                
            </Routes>

        </Box>
    )
}