const { default: productsSlice } = require("../reducer/productsSlice");
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducer/cartSlice";
import wishSlice from "../reducer/wishSlice";

const store = configureStore({
    reducer : {
        products : productsSlice,
        cart : cartSlice,
        wishList : wishSlice
    }
})

export default store;