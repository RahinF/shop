import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const ImagePlaceholder = styled.div`
  background: #7b7878;
  height: ${props => props.containerHeight}px;
  width: ${props => props.containerWidth}px;
`;

function LazyContainer({ height, width, src, alt }) {

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });
  
  return (

    <>
      {inView ?
        <img
          height={height}
          width={width}
          src={src}
          alt={alt}
          loading="lazy"
        />
        : <ImagePlaceholder
          ref={ref}
          containerHeight={height}
          containerWidth={width} />}
    </>
  );
}

export default LazyContainer;
