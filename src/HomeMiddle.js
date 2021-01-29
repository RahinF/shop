import React from "react";
import styled from "styled-components";
import LazyImage from "./LazyImage";
import { Container, Paragraph, StyledH2 } from "./globalStyles";
import { motion } from "framer-motion";
import { mediaQueries } from "./mediaQueries";

const Flexbox = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  margin-top: 165px;
`;

const ItemGrid = styled.div`
  display: grid;
  row-gap: 3.5rem;

  ${mediaQueries('sm')`
  width: min-content;
  `}
  
`;

const Heading = motion.custom(styled(StyledH2)`
  margin-top: 0;
  margin-bottom: 0.3rem;
`);

const TextRightAlign = styled.div`
  text-align: end;
`;

function HomeMiddle() {
  return (
    <Flexbox>
      <ItemGrid>
        <motion.div initial={{ x: -100 }} animate={{  x: 0 }}>
          <LazyImage
            height="650"
            width="400"
            src="https://i.pinimg.com/originals/83/bd/e3/83bde36bb153668f7813d1e33d20c1b7.jpg"
            alt="..."
          />
        </motion.div>
        <div>
          <Heading>Fashion Evolution</Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            cumque provident aut et mollitia.
          </Paragraph>
        </div>
      </ItemGrid>

      <ItemGrid>
        <TextRightAlign>
          <Heading>Trendy Wear</Heading>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            cumque provident aut et mollitia.
          </Paragraph>
        </TextRightAlign>

        <LazyImage
          height="650"
          width="400"
          src="https://i.pinimg.com/originals/83/bd/e3/83bde36bb153668f7813d1e33d20c1b7.jpg"
          alt="..."
        />
      </ItemGrid>
    </Flexbox>
  );
}

export default HomeMiddle;
