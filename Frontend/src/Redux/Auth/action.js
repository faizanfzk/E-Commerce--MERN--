export const  IS_LOGIN="IS_LOGIN";

export const isLogin=(obj)=>{
return{
    type:IS_LOGIN,
    payload:obj
}
 }
// import Axios from "axios";

// export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
// export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
// export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

// const signInRequest = () => {
//     return {
//         type: SIGN_IN_REQUEST,
//     }
// }

// const signInsSuccess = (payload) => {
//     return {
//         type: SIGN_IN_SUCCESS,
//         payload
//     }
// }

// const signInFailure = (payload) => {
//     return {
//         type: SIGN_IN_FAILURE,
//         payload
//     }
// }

// const signIn = (payload) => (dispatch) => {
//     dispatch(signInRequest());
//     Axios.post("/api/login" , payload , {baseURL: "https://reqres.in"})
//     .then((r) => dispatch(signInsSuccess(r.data)))
//     .catch((e) => dispatch(signInFailure(e.data)))
// };

//  export { signIn };