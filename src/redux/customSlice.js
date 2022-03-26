import { createSlice } from "@reduxjs/toolkit";


export const customSlice = createSlice({
    name: 'customer',
    initialState: {
        name: 'Shoukhin Khan',
        address: 'Dhamrai, Dhaka',
        email: 'skhoukhinkhan@gmail.com'
    },
    reducers: {
        changeCName: (state, action) => {
            state.name = action.payload.name
        },
        changeCAddress: (state, action) => {
            state.address = action.payload.address
        },
        changeCEmail: (state, action) => {
            state.email = action.payload.email
        },
    }
});

export const { changeCName, changeCAddress, changeCEmail } = customSlice.actions;
export default customSlice.reducer;