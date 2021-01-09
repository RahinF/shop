import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const ImageContainer = styled.div`
  background: #7b7878;
  height: ${props => props.containerHeight}px;
  width: ${props => props.containerWidth}px;
`;

function LazyContainer({ height, width, src, alt }) {
  const [ref, inView] = useInView({
    // triggerOnce: true,
    // rootMargin: "-100",
  });
  return (
    <ImageContainer 
    ref={ref} 
    containerHeight={height} 
    containerWidth={width}>

      {inView && (
        <img
          height={height}
          width={width}
          src={src}
          alt={alt}
          loading="lazy"
        />
      )}
    </ImageContainer>
  );
}

export default LazyContainer;
