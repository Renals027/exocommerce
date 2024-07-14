import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchProductRequest(state, _action) {
      state.loading = true;
      state.error = null;
    },
    fetchProductSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchProductRequest, fetchProductSuccess, fetchProductFailure} = productSlice.actions;

export default productSlice.reducer;
