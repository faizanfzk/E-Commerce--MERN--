import * as types from "./actionTypes";
import axios from "axios";

export const fetchdataRequest = (payload) => {
  return {
    type: types.FETCH_DATA_REQUEST,
    payload,
  };
};
export const fetchdataSuccess = (payload) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  };
};
export const fetchdataFailure = (payload) => {
  return {
    type: types.FETCH_DATA_FAILURE,
    payload,
  };
};

export const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(fetchdataRequest());
    axios({
      url:"https://ecomerce-mern.herokuapp.com/products",
      method: "get",
      params: {
        ...payload,
      },
    })
      .then((res) => {
        dispatch(fetchdataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchdataFailure(err.data));
      });
  };
};

export const getSingleProductSuccess = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_SUCCESS,
    payload,
  };
};
export const getSingleProductFailure = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_FAILURE,
    payload,
  };
};

export const getSingleProduct = (id) => (dispatch) => {
  dispatch(getSingleProductRequest());
  axios({
    url: `https://ecomerce-mern.herokuapp.com/products/${name}`,
    method: "GET",
  })
    .then((res) => {
      dispatch(getSingleProductSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getSingleProductFailure(err.data));
    });
};