import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    cancelOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
    updateOrderStatus: (state, action) => {
      const { orderId, newStatus } = action.payload;
      const orderToUpdate = state.orders.find((order) => order.id === orderId);

      if (orderToUpdate) {
        orderToUpdate.status = newStatus;
      }
    },
    updateOrderEndTime: (state, action) => {
      const { orderId, newEndTime } = action.payload;
      const orderToUpdate = state.orders.find((order) => order.id === orderId);

      if (orderToUpdate) {
        orderToUpdate.endTime = newEndTime;
      }
    },
  },
});

export const {
  addOrder,
  cancelOrder,
  updateOrderStatus,
  updateOrderEndTime,
} = orderSlice.actions;
export default orderSlice.reducer;
