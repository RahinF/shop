import React from "react";
import styled from "styled-components";
import { Container, StyledH2, Paragraph } from "../style";

const Flexbox = styled(Container)`
  display: flex;
  margin-top: 165px;
`;

const Grid = styled.div`
  display: grid;
  grid-template: 1fr 1fr 4fr 1fr 1fr / repeat(3, 1fr) 4fr;
  column-gap: 1rem;
`;

const TextContainer = styled.div`
  grid-area: 3 / 4;
`;

const ImagePlaceholder = styled.div`
  background: blue;
  height: 600px;
  width: 250px;
  grid-area: ${(props) => props.row} / ${(props) => props.col} / span 3;
`;

function Gallery() {
  return (
    <Flexbox>
      <Grid>
        <ImagePlaceholder row="3" col="1" />
        <ImagePlaceholder row="2" col="2" />
        <ImagePlaceholder row="1" col="3" />

        <TextContainer>
          <StyledH2>Gallery</StyledH2>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            ullam alias tempore laborum minus quo vitae aspernatur nesciunt fuga
            adipisci.
          </Paragraph>
        </TextContainer>
      </Grid>
    </Flexbox>
  );
}

export default Gallery;
