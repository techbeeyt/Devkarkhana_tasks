import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
    name: 'Cart',
    initialState: {
        carts: []
    },
    reducers: {
        add: (state, action) => {
            if (!state.carts.some(c => c.productID === action.payload.productID)) {
                state.carts = [...state.carts, action.payload];
            }
        },
        remove: (state, action) => {
            state.carts.forEach((item, i) => {
                if (item.productID === action.payload) {
                    state.carts.splice(i, 1);
                }
            })
        }
    }
})

export const { add, remove } = cart.actions;

export default cart.reducer;