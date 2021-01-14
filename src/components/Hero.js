import React from "react";
import SocialMedia from "./SocialMedia";
import styled from "styled-components";
import LazyImage from "./LazyImage";
import heroImage from "./hero-image.jpg";
import { Container, Paragraph, Button, PatternBackground } from "../style";

const Grid = styled(Container)`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  column-gap: 3rem;
  margin: 3rem auto 0;
`;

const Heading = styled.h1`
  align-self: end;
  font-family: "Poiret One", cursive;
  font-size: 4rem;
  font-weight: normal;
  margin-bottom: 0;
`;

const Text = styled(Paragraph)`
  font-size: 1.5rem;
`;

const SocialMediaContainer = styled.div`
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before,
  &:after {
    content: "";
    width: 117px;
    height: 2px;
    background: #7b7878;
  }
`;

const ImageGrid = styled.div`
  grid-area: 1 / 2 / span 3;
  align-self: center;

  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  margin-bottom: 3.3rem;
  margin-left: -150px;
`;

function Hero() {
  return (
    <Grid>
      <Heading>Fashion Revolution</Heading>

      <div>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio cumque
          provident aut et mollitia.
        </Text>
        <Button>Shop Now</Button>
      </div>

      <SocialMediaContainer>
        <SocialMedia />
      </SocialMediaContainer>

      <ImageGrid>
        <PatternBackground patternHeight="200px" patternWidth="200px" bottom />

        <ImageContainer>
          <LazyImage height="650" width="400" src={heroImage} alt="..." />
        </ImageContainer>

        <PatternBackground patternHeight="200px" patternWidth="50px" />
      </ImageGrid>
    </Grid>
  );
}

export default Hero;
