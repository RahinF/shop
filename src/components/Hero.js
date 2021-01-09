import React from "react";
import SocialMedia from "./SocialMedia";
import styled from "styled-components";
import LazyImage from "./LazyImage";
import pattern from "./backgroundPattern.svg";

const Flexbox = styled.div`
  display: flex;
  max-width: 1088px;
  margin: 3rem auto 0;
`;

const HeroLeft = styled.div`
  display: grid;
`;

const HeroInfoContainer = styled.div`
  align-self: center;
`;

const Heading = styled.h1`
  font-family: "Poiret One", cursive;
  font-size: 4rem;
  font-weight: normal;
  margin-bottom: 0;
`;

const Text = styled.p`
  color: #7b7878;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.6;
`;

const Button = styled.button`
  background: none;
  border: 3px solid #f649ce;
  color: #f649ce;
  padding: 1rem 3rem;
  margin-top: 2rem;
  font-family: "Roboto", sans-serif;
  font-size: 22px;

  &:hover {
    background: #f649ce;
    color: #fff;
    cursor: pointer;
  }
`;

const SocialMediaOuter = styled.div`
  align-self: end;
`;

const SocialMediaInner = styled.div`
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
  display: grid;
  grid-template: repeat(14, 50px) / repeat(10, 50px);
`;
const ImageContainer = styled.div`
  grid-area: 1 / 2 / span 13 / span 8;
`;

const PatternBackground = styled.div`
  background: url(${pattern});
  background-size: 10px 10px;
`;
const PatternLeft = styled(PatternBackground)`
  grid-area: 10 / 1 / span 5 / span 4;
`;
const PatternRight = styled(PatternBackground)`
  grid-area: 1 / 10 / span 5;
`;

function Hero() {
  return (
    <Flexbox>
      <HeroLeft>
        <HeroInfoContainer>
          <Heading>Fashion Revolution</Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            cumque provident aut et mollitia.
          </Text>
          <Button>Shop Now</Button>
        </HeroInfoContainer>

        <SocialMediaOuter>
          <SocialMediaInner>
            <SocialMedia />
          </SocialMediaInner>
        </SocialMediaOuter>
      </HeroLeft>

      <ImageGrid>
        <PatternLeft />
        <PatternRight />

        <ImageContainer>
          <LazyImage
            height="650"
            width="400"
            src="https://i.pinimg.com/originals/83/bd/e3/83bde36bb153668f7813d1e33d20c1b7.jpg"
            alt="..."
          />
        </ImageContainer>
      </ImageGrid>
    </Flexbox>
  );
}

export default Hero;
