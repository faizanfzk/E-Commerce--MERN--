import {isLoginReducer} from "./Auth/reducer"
import { createStore,combineReducers,applyMiddleware } from "redux"

import thunk from "redux-thunk"

const rootReducer=combineReducers({
    isLogin:isLoginReducer
})
export const store=createStore(rootReducer,applyMiddleware(thunk))