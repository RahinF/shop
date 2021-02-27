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

const Heading = styled(StyledH3)`
  margin-bottom: 3rem;
`;

const Logo = styled.h1`
  justify-self: center;
  font-family: ${fonts["heading"]};
  font-size: 2.6rem;
  font-weight: normal;
  color: #f649ce;
  padding: 0 3rem;
`;

const FooterContainer = styled.footer`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const LinksContainer = styled.div`
  display: flex;

  ul {
    margin: 0;

    :first-child {
      padding-left: 0;
    }
  }

  li {
    font-family: ${fonts["text"]};
    list-style: none;
    cursor: pointer;
    line-height: 1.7;
  }
`;

const NewsletterForm = styled.form`
  border-bottom: 2px solid #7b7878;
  padding-bottom: 0.5rem;
  font-family: ${fonts["text"]};

  input {
    font-size: 1rem;
    border: none;
    outline: none;
  }

  &:focus-within {
    border-bottom: 2px solid #f649ce;
  }

  button {
    font-size: 1rem;
    font-family: ${fonts["text"]};
    background: none;
    border-style: none;
    cursor: pointer;
  }
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
            <Heading>Newsletter</Heading>

            <NewsletterForm>
              <input type="text" placeholder="your email address" />
              <button type="submit">submit</button>
            </NewsletterForm>
          </div>

          <div>
            <Heading>Menu</Heading>
            <LinksContainer>
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
            </LinksContainer>
          </div>

          <div>
            <Heading>Stay Social</Heading>
            <SocialMedia />
          </div>
        </FlexContainer>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
