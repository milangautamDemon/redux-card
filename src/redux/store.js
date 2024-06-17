import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice.jsx";
import productReducer from "./ProductSlice.jsx";
import priceReducer from "./PriceSlice.jsx";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    price: priceReducer,
  },
});

export default store;
