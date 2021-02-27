import React from "react";
import styled from "styled-components";
import { Container, StyledH2, Paragraph } from "./globalStyles";
import LazyImage from "./LazyImage";
import { motion } from "framer-motion";
import { mediaQueries } from "./mediaQueries";

const images = [
  {
    height: "600",
    width: "250",
    src:
      "https://i.pinimg.com/originals/83/bd/e3/83bde36bb153668f7813d1e33d20c1b7.jpg",
    alt: "...",
  },
  {
    height: "600",
    width: "250",
    src:
      "https://i.pinimg.com/originals/83/bd/e3/83bde36bb153668f7813d1e33d20c1b7.jpg",
    alt: "...",
  },
  {
    height: "600",
    width: "250",
    src:
      "https://i.pinimg.com/originals/83/bd/e3/83bde36bb153668f7813d1e33d20c1b7.jpg",
    alt: "...",
  },
];

const Flexbox = styled(Container)`
  display: flex;

  ${mediaQueries("sm", "max")`
  flex-wrap: wrap-reverse;
  `}

  margin-top: 165px;
  gap: 1rem;
`;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ImageGrid = styled(motion.div)`
  display: grid;
  grid-template: 1fr 1fr 6fr 1fr 1fr / repeat(3, 1fr);
  column-gap: 1rem;
`;

const TextContainer = styled(motion.div)``;

const ImageContainer = styled(motion.div)`
  grid-area: ${(props) => props.row} / ${(props) => props.col} / span 3;
`;

function Gallery() {
  return (
    <Flexbox>
      <ImageGrid initial="hidden" animate="visible" variants={container}>
        {images.map((image, index) => (
          <ImageContainer
            row={images.length - index}
            col={index + 1}
            variants={item}
            key={index}
          >
            <LazyImage
              height={image.height}
              width={image.width}
              src={image.src}
              alt={image.alt}
            />
          </ImageContainer>
        ))}
      </ImageGrid>

      <TextContainer>
        <StyledH2>Gallery</StyledH2>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          ullam alias tempore laborum minus quo vitae aspernatur nesciunt fuga
          adipisci.
        </Paragraph>
      </TextContainer>
    </Flexbox>
  );
}

export default Gallery;
