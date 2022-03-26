import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import customReducer from "./customSlice";


export default configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        customer: customReducer,
    }
});

