import styled, { createGlobalStyle } from "styled-components";
import bgPattern from "./bg-pattern.svg";
import { mediaQueries } from "./mediaQueries";
import {fonts} from './theme'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background: #fdfafd;
}
`;

const Container = styled.div`
  ${mediaQueries("sm")`
  max-width: 514px;
  `}

  ${mediaQueries("md")`
  max-width: 690px;
  `}

  ${mediaQueries("lg")`
  max-width: 1200px;
  `}

  padding: 0 1rem;
  margin: auto;
`;

const StyledH2 = styled.h2`
  font-family: ${fonts['heading']};
  font-size: 3rem;
  font-weight: normal;
`;

const StyledH3 = styled.h3`
  font-family: ${fonts['heading']};
  font-size: 1.5rem;
`;

const Paragraph = styled.p`
  color: #7b7878;
  font-family: ${fonts['text']};;
  font-size: 1.3rem;
  line-height: 1.6;
`;

const PatternBackground = styled.div`
  background: url(${bgPattern});
  background-size: 10px 10px;
  height: ${(props) => props.patternHeight};
  width: ${(props) => props.patternWidth};
  align-self: ${(props) => (props.bottom ? "flex-end" : "flex-start")};
`;

export {
  GlobalStyle,
  Container,
  StyledH2,
  StyledH3,
  Paragraph,
  PatternBackground,
};
