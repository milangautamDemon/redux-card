import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: 0,
  reducers: {
    addPrice(state, action) {
      return (state += action.payload);
    },
    removePrice(state, action) {
      return (state -= action.payload);
    },
  },
});

export const { addPrice, removePrice } = priceSlice.actions;
export default priceSlice.reducer;
