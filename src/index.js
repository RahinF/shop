import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./CartProvider";
import reducer, { initialState } from "./cartReducer";

ReactDOM.render(

    <CartProvider initialState={initialState} reducer={reducer}>
      <App />
    </CartProvider>

  ,
  document.getElementById("root")
);
