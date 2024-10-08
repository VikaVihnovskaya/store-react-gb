import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./CartReducer";


const store = configureStore({
  reducer: {
  cartItems: cartReducer,
  },
});

export default store;