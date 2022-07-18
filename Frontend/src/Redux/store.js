import {isLoginReducer} from "./Auth/reducer"
import { legacy_createStore,combineReducers,applyMiddleware,compose } from "redux"
import productReducer from './products/reducer';

import thunk from "redux-thunk"

const rootReducer=combineReducers({
    isLogin:isLoginReducer,
    ecommerceData: productReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=legacy_createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)))