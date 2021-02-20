import React from "react";
import styled from "styled-components";

const btnSize = { default: 2, sm: 1, lg: 3 };
const fontSize = { default: 18, sm: 16, lg: 22 };

const StyledButton = styled.button`
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  background: ${(props) => (props.type ? "none" : "#f649ce")};
  color: ${(props) => (props.type ? "#f649ce" : "#fff")};
  border: 3px solid #f649ce;

  padding: ${(props) => {
    const size = props.size;

    if (size) {
      return `${btnSize[size] / 3}rem ${btnSize[size]}rem `;
    } else {
      return `${btnSize["default"] / 3}rem ${btnSize["default"]}rem`;
    }
  }};

  font-size: ${(props) =>
    props.size ? fontSize[props.size] : fontSize["default"]}px;

  &:hover {
    background: ${(props) => (props.type ? "#f649ce" : "#c43aa4")};
    border: 3px solid ${(props) => (props.type ? "transparent" : "#c43aa4")};
    color: #fff;
  }
`;

function Button({ size, outline, text, onClick }) {
  return (
    <StyledButton size={size} type={outline} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default Button;
