import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";

const links = [
  {
    title: "Home",
    url: "/",
  },

  {
    title: "Testimonial",
    url: "/testimonial",
  },
  {
    title: "Shop",
    url: "/shop",
  },

  {
    title: "Contact",
    url: "/contact",
  },
];

function Header() {
  return (
    <header>
      <p className="nav-logo">Logo</p>

      <ul className="nav-links">

        {
          links.map(link =>(
            <Link to={link.url}><li>{link.title}</li></Link>
          ))
        }

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
