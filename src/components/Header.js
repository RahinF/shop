import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {Container} from "../style"

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
  font-family: "Roboto", sans-serif;
  font-size: 22px;
`;
const Logo = styled.h1`
  justify-self: center;
  font-family: "Poiret One", cursive;
  font-size: 2.6rem;
  font-weight: normal;
  color: #f649ce;
`;

const LinkText = styled.span`
  padding-bottom: 0.5rem;
`;

function Header() {
  return (
    <header>
      <Navbar>
        <Logo>Company</Logo>

        <StyledUl>
          {links.map((link) => (
            <StyledLi>
              <StyledLink to={link.url} exact={true}>
                <LinkText>{link.title}</LinkText>
              </StyledLink>
            </StyledLi>
          ))}
        </StyledUl>
      </Navbar>
    </header>
  );
}

export default Header;
