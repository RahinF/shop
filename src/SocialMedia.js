import React from "react";
import styled from "styled-components";
import twitterIcon from "./assets/twitter-icon.svg";
import facebookIcon from "./assets/facebook-icon.svg";
import instagramIcon from "./assets/instagram-icon.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: space-between;
`;

const Icon = styled.span`
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
