import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

const ImagePlaceholder = styled.div`
  background: #7b7878;
  height: ${(props) => props.containerHeight}px;
  width: ${(props) => props.containerWidth}px;
`;

const Image = styled.img`
  ${mediaQueries("sm", "max")`
  height: auto;
  width: 100%;
  `}
`;

function LazyImage({ height, width, src, alt }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  return (
    <>
      {inView ? (
        <Image
          height={height}
          width={width}
          src={src}
          alt={alt}
          loading="lazy"
        />
      ) : (
        <ImagePlaceholder
          ref={ref}
          containerHeight={height}
          containerWidth={width}
        />
      )}
    </>
  );
}

export default LazyImage;
