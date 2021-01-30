import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Shop from "./Shop";
import Contact from "./Contact";
import { GlobalStyle } from "./globalStyles";
import { CartProvider } from "./CartProvider";
import reducer, { initialState } from "./cartReducer";

function App() {
  return (
    <CartProvider initialState={initialState} reducer={reducer}>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </CartProvider>
  );
}

export default App;
