import { createSlice } from "@reduxjs/toolkit";
import Checkout from "../../pages/Checkout";
import { sumPrice, sumQuantity } from "../../Helper/Helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  Checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((i) => i.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuantity(state.selectedItems);
        state.Checkout = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );

      state.selectedItems = newSelectedItems;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.Checkout = false;
    },
    increse: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );

      state.selectedItems[increaseIndex].quantity++;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.Checkout = false;
    },
    decrese: (state, action) => {
      const decreseIndex = state.selectedItems.findIndex(
        (i) => i.id === action.payload.id
      );

      state.selectedItems[decreseIndex].quantity--;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.Checkout = false;
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.total = 0;
      state.itemsCounter = 0;
      state.Checkout = true;
    },
  },
});

export default cartSlice.reducer;
export const { increse, decrese, addItem, removeItem, checkout } =
  cartSlice.actions;
