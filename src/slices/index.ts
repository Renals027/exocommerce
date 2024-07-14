import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const rootReducer = combineReducers({
    product: productSlice
});

export default rootReducer;