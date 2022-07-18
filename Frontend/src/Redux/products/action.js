import axios from 'axios';
import * as types from './actionTypes';

const fetchDataRequest = (payload) => {
    return {
        type: types.FETCH_DATA_REQUEST,
        payload
    }
}

const fetchDataSuccess = (payload) => {
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFailure = (payload) => {
    return {
        type: types.FETCH_DATA_FAILURE,
        payload
    }
}

export const fetchData = (payload) => {
    return (dispatch) => {
    dispatch(fetchDataRequest());
    axios.get('https://ecomerce-mern.herokuapp.com/products', {
        params: {
            ...payload,
        },
    })
    .then((r) => dispatch(fetchDataSuccess(r.data)))
    .catch((e) => dispatch(fetchDataFailure(e.data)));
    };
};


const getSingleProductRequest = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
}

const getSingleProductSuccess = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

const getSingleProductFailure = (payload) => {
    return {
        type: types.GET_SINGLE_PRODUCT_FAILURE,
        payload
    };
};


export const getSingleProduct = (_id) => (dispatch) => {
    dispatch(getSingleProductRequest())
    axios.get(`https://ecomerce-mern.herokuapp.com/products/${_id}`)
    .then(r => dispatch(getSingleProductSuccess(r.data)))
    .catch(e => dispatch(getSingleProductFailure(e.data)))

    // console.log(data)
};

const addProductCartRequest = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART_REQUEST,
        payload
    }
}

const addProductCartSuccess = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART_SUCCESS,
        payload
    }
}

const addProductCartFailure = (payload) => {
    return {
        type: types.ADD_PRODUCT_CART_FAILURE,
        payload
    };
};

export const addProductCart = (product) => (dispatch) => {
    dispatch(addProductCartRequest());
    axios.post('https://ecomerce-mern.herokuapp.com/cart', product)
    .then((r) => dispatch(addProductCartSuccess(r.data)))
    .catch((e) => dispatch(addProductCartFailure(e.data)));
    
};
