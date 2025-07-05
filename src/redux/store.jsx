import { createStore, applyMiddleware } from "redux";
import  thunk  from "redux-thunk";
//import productReducer from "./reducers/productReducer";
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

// let store = createStore(productReducer,applyMiddleware(thunk))
let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store