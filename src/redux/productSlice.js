import { createSlice } from "@reduxjs/toolkit";


export const productSlice = createSlice({
    name: "product",
    initialState: {
        name: 'T-Shirt For Man',
        price: 250,
        size: 'Medium',
        qty: 2
    },
    reducers: {
        changePName: (state, action) => {
            state.name = action.payload.name
        },
        changePPrice: (state, action) => {
            state.price = action.payload.price
        },
        changePSize: (state, action) => {
            state.size = action.payload.size 
        },
        changePQty: (state, action) => {
            state.qty = action.payload.qty
        }
    }
});

export const { changePName, changePPrice, changePSize, changePQty } = productSlice.actions;
export default productSlice.reducer;