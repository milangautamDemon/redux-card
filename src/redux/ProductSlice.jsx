import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.SUCCESS,
  },
  reducers: {
    setProduct(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProduct, setStatus } = productSlice.actions;
export default productSlice.reducer;

//middleware
export const fetchProducts = () => {
  return async function fetchProductThunk(dispatch) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const fetchData = await fetch("https://fakestoreapi.com/products");
      const data = await fetchData.json();
      dispatch(setProduct(data));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      console.error("Error", error);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};
