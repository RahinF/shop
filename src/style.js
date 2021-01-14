import styled from "styled-components";
import bgPattern from "./components/bg-pattern.svg";

const Container = styled.div`
  max-width: 1088px;
  margin: auto;
`;

const StyledH2 = styled.h2`
  font-family: "Poiret One", cursive;
  font-size: 3rem;
  font-weight: normal;
`;

const Paragraph = styled.p`
  color: #7b7878;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
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

const PatternBackground = styled.div`
  background: url(${bgPattern});
  background-size: 10px 10px;
  height: ${props => props.patternHeight};
  width: ${props => props.patternWidth};
  align-self: ${props => props.bottom ? "flex-end" : "flex-start"};
`;

export { Container, StyledH2, Paragraph, Button, PatternBackground };
