import * as types from "./actionTypes";
import axios from "axios"

export const addProductCartRequest=(payload)=>{
    return{
        type:types.ADD_PRODUCT_CART_REQUEST,
        payload
    }
}
export const addProductCartSuccess=(payload)=>{
    return{
        type:types.ADD_PRODUCT_CART_SUCCESS,
        payload
    }
}
export const addProductCartFailure=(payload)=>{
    return{
        type:types.ADD_PRODUCT_CART_FAILURE,
        payload
    }
}

export const addProductCart=(product)=>(dispatch)=>{
    dispatch(addProductCartRequest());
    axios.post("https://ecomerce-mern.herokuapp.com/cart",product)
    .then((res)=>dispatch(addProductCartSuccess(res.data)))
    .catch((err)=>dispatch(addProductCartFailure(err.data)))
    
}