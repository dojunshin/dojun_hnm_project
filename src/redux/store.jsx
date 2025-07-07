import { createStore, applyMiddleware } from "redux";
import  thunk  from "redux-thunk";
//import productReducer from "./reducers/productReducer";
// import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/productReducer";
import productReducer from './reducers/productReducer'
import authenticateReducer from './reducers/authenticateReducer'

// let store = createStore(productReducer,applyMiddleware(thunk))
// let store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// )

const store = configureStore ({ //index.jsx의 내용들이 필요없어지게 됨.
    reducer:{
        auth:authenticateReducer,
        product:productReducer
    }
})

export default store