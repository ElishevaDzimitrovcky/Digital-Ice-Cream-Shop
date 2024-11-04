
import { combineReducers } from "redux";
// import { productReducer } from "./products";
import { cartReducer } from "./cart";
import { productReducer } from "./productsreducer";

export const allReducers = combineReducers({
    cartReducer: cartReducer,
    productReducer: productReducer
})