import React from "react";
import styled from "styled-components";
import LazyImage from "../components/LazyImage";

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1088px;
  margin: auto;
  margin-top: 165px;
`;

const ItemGrid = styled.div`
  display: grid;
  row-gap: 3.5rem;
  width: min-content;
`;

const Heading = styled.h2`
  font-family: "Poiret One", cursive;
  font-size: 3rem;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0.3rem;
`;

const Text = styled.p`
  color: #7b7878;
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.6;
`;

const TextRightAlign = styled.div`
  text-align: end;
`;

function HomeMiddle() {
  return (
    <Grid>
      <ItemGrid>
        <LazyImage
          height="650"
          width="400"
          src="https://i.pinimg.com/originals/83/bd/e3/83bde36bb153668f7813d1e33d20c1b7.jpg"
          alt="..."
        />

        <div>
          <Heading>Fashion Evolution</Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            cumque provident aut et mollitia.
          </Text>
        </div>
      </ItemGrid>

      <ItemGrid>
        <TextRightAlign>
          <Heading>Trendy Wear</Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            cumque provident aut et mollitia.
          </Text>
        </TextRightAlign>

        <LazyImage
          height="650"
          width="400"
          src="https://i.pinimg.com/originals/83/bd/e3/83bde36bb153668f7813d1e33d20c1b7.jpg"
          alt="..."
        />
      </ItemGrid>
    </Grid>
  );
}

export default HomeMiddle;
