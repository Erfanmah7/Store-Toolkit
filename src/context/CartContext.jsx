import React, { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../Helper/Helper";

const CartProvider = createContext();

const initialState = {
  selectItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const reduce = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD":
      if (!state.selectItems.find((item) => item.id === action.payload.id)) {
        state.selectItems.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        ...sumProducts(state.selectItems),
        checkout: false,
      };

    default:
      throw new Error("invalid data");
  }
};

function CartContext({ children }) {
  const [state, dispatch] = useReducer(reduce, initialState);

  return (
    <div>
      <CartProvider.Provider value={{ state, dispatch }}>
        {children}
      </CartProvider.Provider>
    </div>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartProvider);
  return [state, dispatch];
};

export default CartContext;
export { useCart };
