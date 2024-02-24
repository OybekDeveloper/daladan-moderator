import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  product: false,
  productId: "",
  openComplaint: false,
};
export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    ProductModal: (state, action) => {
          state.product = !state.product;
          state.productId=action.payload
    },
    openComplaintModal: (state, action) => {
      state.openComplaint = !state.openComplaint;
    },
  },
});

export const { ProductModal, openComplaintModal } = eventSlice.actions;
export default eventSlice.reducer;
