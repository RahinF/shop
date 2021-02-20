import React from "react";
import SocialMedia from "./SocialMedia";
import styled from "styled-components";
import LazyImage from "./LazyImage";
import heroImage from "./hero-image.jpg";
import { Container, Paragraph,  PatternBackground } from "./globalStyles";
import { mediaQueries } from "./mediaQueries";
import Button from './Button'

const Grid = styled(Container)`
  display: grid;
  gap: 1rem 0;

  ${mediaQueries("md")`
  grid-template: repeat(3, auto) / repeat(2, 1fr);
  gap: 0 3rem;`
  }

  margin: 3rem auto 0;
`;

const Heading = styled.h1`
  align-self: end;
  font-family: "Poiret One", cursive;
  font-size: 4rem;
  font-weight: normal;

  ${mediaQueries("md")`
  margin-bottom: 0;
  `}
  
`;

const Text = styled(Paragraph)`
  font-size: 1.5rem;
`;

const TextContainer = styled.div`
display: grid;

button {
    justify-self: center;
   

    ${mediaQueries("md")`
    justify-self: baseline;
    align-self: baseline;
    `}
}
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
  grid-row: 2;

  ${mediaQueries("md")`
  grid-area: 1 / 2 / span 3;`
  }


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

      <TextContainer>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio cumque
          provident aut et mollitia.
        </Text>
        <Button text='Shop Now' size='lg' outline/>
      </TextContainer>

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
