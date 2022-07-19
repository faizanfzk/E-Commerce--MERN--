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
    axios.post(' http://localhost:8080/cart', product)
    .then((r) => dispatch(addProductCartSuccess(r.data)))
    .catch((e) => dispatch(addProductCartFailure(e.data)));
    
};


const fetchCartRequest = (payload) => {
    return {
        type: types.FETCH_CART_REQUEST,
        payload
    }
}

const fetchCartSuccess = (payload) => {
    return {
        type: types.FETCH_CART_SUCCESS,
        payload
    }
}

const fetchCartFailure = (payload) => {
    return {
        type: types.FETCH_CART_FAILURE,
        payload
    };
};

export const fetchCart = (paylaod) => (dispatch) => {
    dispatch(fetchCartRequest());
    axios.get('http://localhost:8080/cart')
    .then((r) => dispatch(fetchCartSuccess(r.data)))
    .catch((e) => dispatch(fetchCartFailure(e.data)));
};

const deleteProductCartRequest = (payload) => {
    return {
        type: types.REMOVE_PRODUCT_CART_REQUEST,
        payload
    }
}

const deleteProductCartSuccess = (payload) => {
    return {
        type: types.REMOVE_PRODUCT_CART_SUCCESS,
        payload
    }
}

const deleteProductCartFailure = (payload) => {
    return {
        type: types.REMOVE_PRODUCT_CART_FAILURE,
        payload
    };
};

export const deleteProductCart = (_id) => dispatch => {
    dispatch(deleteProductCartRequest());
    axios.delete(` http://localhost:8080/cart${_id}`)
    .then((r) => {
        // console.log("response:", r); 
        dispatch(deleteProductCartSuccess(r.data))
    })
    .then(() => dispatch(fetchCart()))
    .catch((e) => dispatch(deleteProductCartFailure(e.data)));
};

const addOrderRequest = (payload) => {
    return {
        type: types.ADD_ORDER_REQUEST,
    }
}

const addOrderSuccess = (payload) => {
    return {
        type: types.ADD_ORDER_SUCCESS,
        payload
    }
}

const addOrderFailure = (payload) => {
    return {
        type: types.ADD_ORDER_FAILURE,
        payload
    };
};

export const addOrder = (payload) => (dispatch) => {
    dispatch(addOrderRequest());
    const orderPayload = [];
    for(let product of payload){
        product && orderPayload.pudh(axios.post('/orders', product));
    }

    Promise.all(orderPayload)
    .then((r) => {
        console.log(r);
        dispatch(addOrderSuccess())
    })
    .then(() => emptyCart(payload))
    .catch((e) => dispatch(addOrderFailure()));
};

const emptyCartRequest = () => {
    return {
        type: types.EMPTY_CART_REQUEST
    }
}

const emptyCartSuccess = () => {
    return {
        type: types.EMPTY_CART_SUCCESS
    }
}

const emptyCartFailure = () => {
    return {
        type: types.EMPTY_CART_FAILURE
    }
}

export const emptyCart = (payload) => (dispatch) => {
    dispatch(emptyCartRequest());
    const deleteOrders = [];
    for(let obj of payload){
        let temp = dispatch(deleteProductCart(obj.id));
        deleteOrders.push(temp);
    }

    Promise.all(deleteOrders)
    .then((r) => dispatch(emptyCartSuccess()))
    .catch((e) => dispatch(emptyCartFailure()));
};

// const fetchOrdersRequest = (payload) => {
//     return {
//         type: types.FETCH_ORDERS_REQUEST,
//         payload
//     }
// }

// const fetchOrdersSuccess = (payload) => {
//     return {
//         type: types.FETCH_ORDERS_SUCCESS,
//         payload
//     }
// }

// const fetchOrdersFailure = (payload) => {
//     return {
//         type: types.FETCH_ORDERS_FAILURE,
//         payload
//     };
// };

// export const fetchOrders = (paylaod) => (dispatch) => {
//     dispatch(fetchOrdersRequest());
//     axios.get('/orders')
//     .then((r) => dispatch(fetchOrdersSuccess(r.data)))
//     .catch((e) => dispatch(fetchOrdersFailure(e.data)));
// };