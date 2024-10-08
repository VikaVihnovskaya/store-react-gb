import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("CART") || "[]"),
};

const saveToLocalStorage = (cart) => {
  localStorage.setItem("CART", JSON.stringify(cart));
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        const quantity = 1;
        const newItem = {...action.payload, quantity};
        state.cartItems = [...state.cartItems, newItem];
      }
      saveToLocalStorage(state.cartItems);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
      );
      saveToLocalStorage(state.cartItems);
    },
    updateCartItemQuantity: (state, action) => {
      const item = state.cartItems.find(
          (item) => item.id === action.payload.id
      );
      if(item) {
        item.quantity = action.payload.value;
      }
      saveToLocalStorage(state.cartItems);
    },
    clearCart: (state) => {
      state.cartItems = [];
      saveToLocalStorage(state.cartItems);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
} = cartReducer.actions;

export default cartReducer.reducer;

