import * as types from "./actionTypes"

const initSate={
    products:[],
    error:'',
    currentProduct:{},
    loading:false,
    // cart:[],
    // orders:[]
}

export const prodReducer=(state=initSate,action)=>{
    const {type,payload}=action
    switch(type){
        case types.FETCH_DATA_REQUEST:{
            return{
                ...state,
                error:'',
                loading:true
            }
        }
        case types.FETCH_DATA_SUCCESS:{
            return{
                ...state,
                error:'',
                products:payload,
                loading:false
            }
        }
        case types.FETCH_DATA_FAILURE:{
            return{
                ...state,
                error:payload
               
            }
        }

        case types.GET_SINGLE_PRODUCT_REQUEST:{
            return{
                ...state,
                error:'',
                
                loading:true
            }
        }
        case types.GET_SINGLE_PRODUCT_SUCCESS:{
            return{
                ...state,
                error:'',
               currentProduct: payload,
                loading:false
            }
        }
        case types.GET_SINGLE_PRODUCT_FAILURE:{
            return{
                ...state,
                error:payload,
                loading:false
               
            }
        }
        
        default : return state
    }
}