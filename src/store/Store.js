import { configureStore } from "@reduxjs/toolkit";

import OrderReducer from "./slices/orderSlice";
export const store = configureStore({
  reducer: {
    orders: OrderReducer,
  },
});
