import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  product: false,
  productId: "",
  report: false,
  reportId: "",
};
export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    ProductModal: (state, action) => {
      state.product = !state.product;
      state.productId = action.payload;
    },
    ReportModal: (state, action) => {
      state.report = !state.report;
      state.reportId = action.payload;
    },
  },
});

export const { ProductModal, ReportModal } = eventSlice.actions;
export default eventSlice.reducer;
