import React from "react";
import SocialMedia from "./SocialMedia";
import { Container, StyledH3 } from "./globalStyles";
import styled from "styled-components";
import { fonts } from "./theme";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LogoContainer = styled.div`
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 2px;
    background: #7b7878;
  }
`;

const Logo = styled.h1`
  justify-self: center;
  font-family: ${fonts['heading']};
  font-size: 2.6rem;
  font-weight: normal;
  color: #f649ce;
  padding: 0 3rem;
`;

const FooterContainer = styled.footer`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <LogoContainer>
          <Logo>Company</Logo>
        </LogoContainer>

        <FlexContainer>
          <div>
            <StyledH3>Newsletter</StyledH3>

            <form>
              <input type="text" placeholder="your email address" />
              <button type="submit">submit</button>
            </form>
          </div>

          <div>
            <StyledH3>Menu</StyledH3>
            <div>
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
              </ul>
              <ul>
                <li>Longer Link 1</li>
                <li>Longer Link 2</li>
                <li>Longer Link 3</li>
              </ul>
            </div>
          </div>

          <div>
            <StyledH3>Stay Social</StyledH3>
            <SocialMedia />
          </div>
          
        </FlexContainer>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
