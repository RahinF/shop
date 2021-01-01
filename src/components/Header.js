import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css"

function Header() {
  return (
    <header>
      <p className="nav-logo">Logo</p>

      <ul className="nav-links">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>

      <div className="nav-social">
        <ShoppingBasketIcon />
        <SearchIcon />
        <MenuIcon />
      </div>
    </header>
  );
}

export default Header;
