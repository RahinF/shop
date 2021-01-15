import React from "react";
import styled from "styled-components";
import twitterIcon from "./twitter-icon.svg";
import facebookIcon from "./facebook-icon.svg";
import instagramIcon from "./instagram-icon.svg";

const Container = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  padding 0 1rem;
  cursor: pointer;
`;

function SocialMedia() {
  return (
    <Container>
      <Icon>
        <img src={twitterIcon} alt="twitter" />
      </Icon>
      <Icon>
        <img src={facebookIcon} alt="facebook" />
      </Icon>
      <Icon>
        <img src={instagramIcon} alt="instagram" />
      </Icon>
    </Container>
  );
}

export default SocialMedia;
