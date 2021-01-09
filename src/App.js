import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tesimonial from "./pages/Testimonial";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import "./App.css"

function App() {
  return (
    <>
      
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/testimonial' component={Tesimonial} />
          <Route path='/shop' component={Shop} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;


