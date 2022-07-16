import { IS_LOGIN } from "./action";

let obj=JSON.parse(localStorage.getItem("loginUser"))|| {
    token:"",
    user:{firstName:"",lastName:"",email:"",password:""}
}

const initState={
    isLogin:obj
};

export const isLoginReducer=(state=initState,action)=>{
    const {type,payload}=action;

    switch(type){
        case IS_LOGIN:{
            return{
                ...state,
                payload
            }
        }
        default : return{
            state
        }
    }
}