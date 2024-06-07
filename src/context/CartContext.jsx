import React, { createContext, useContext, useReducer } from "react";

const CartProvider = createContext();

const initialState = {};

const reduce = (state, action) => {
  console.log(action);
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
