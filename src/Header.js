import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "./CartProvider";
import { getItemTotal } from "./cartReducer";
import { Container } from "./globalStyles";
import { fonts } from "./theme";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Contact",
    url: "/contact",
  },

  {
    title: "Shop",
    url: "/shop",
  },

  {
    title: "Checkout",
    url: "/checkout",
  },
];

const StyledLink = styled(NavLink)`
  padding: 1rem 2rem;
  text-decoration: none;
  color: #000;

  &.active > span {
    border-bottom: 3px solid #f649ce;
  }
`;

const Navbar = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin: auto;
  align-items: center;
`;
const StyledUl = styled.ul`
  justify-self: end;
  display: flex;
  padding-left: 0;
  list-style: none;
`;
const StyledLi = styled.li`
  font-family: ${fonts['text']};
  font-size: 22px;
`;
const Logo = styled.h1`
  justify-self: center;
  font-family: ${fonts['heading']};
  font-size: 2.6rem;
  font-weight: normal;
  color: #f649ce;
`;

const LinkText = styled.span`
  padding-bottom: 0.5rem;
`;

const CartTotal = styled.div`
  background: #8d8d8d;
  padding: 0.3rem;
`;

function Header() {
  const [{ cart }] = useCartContext();

  return (
    <header>
      <Navbar>
        <Logo>Company</Logo>

        <StyledUl>
          {links.map((link, index) => (
            <StyledLi key={index}>
              <StyledLink to={link.url} exact={true}>
                <LinkText>{link.title}</LinkText>
              </StyledLink>
            </StyledLi>
          ))}
          <CartTotal>{getItemTotal(cart)}</CartTotal>
        </StyledUl>
      </Navbar>
    </header>
  );
}

export default Header;
