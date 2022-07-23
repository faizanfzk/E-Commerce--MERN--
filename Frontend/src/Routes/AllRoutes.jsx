import {Box} from "@chakra-ui/react"
import {Routes,Route} from "react-router-dom"
import { Home } from "../Components/Home"
import { Product } from "../Components/Product"
import { Products } from "../Components/Products"
import {Signup} from "../Auth/SignUp"
import {Login} from "../Auth/Login"
import { Cart } from "../Components/Cart"
import { Checkout } from "../Components/CheckOut"
import AuthWrapper from "../Components/ProtectedRoutes"
import { Address } from "../Components/Address"

export const AllRoutes=()=>{

    return(
        <Box>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:_id" element={<Product/>}/>
                <Route path="/cart" element={
                // <AuthWrapper>
                <Cart/>
                // </AuthWrapper>
                }/>
                 <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/> 
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/address" element={<Address/>}/>
            
                
            </Routes>

        </Box>
    )
}