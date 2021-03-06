import React from "react";
import { useCartContext } from "./CartProvider";
import styled from "styled-components";
import { Paragraph, StyledH3 } from "./globalStyles";
import CurrencyFormat from "react-currency-format";
import Button from "./Button";

const ProductContainer = styled.div`
  ${(props) =>
    props.checkout ? `display: flex; justify-content: space-around;` : ""};
  border: 1px solid #8d8d8d;
  padding: 1rem;
  height: fit-content;
`;

const PlaceholderImage = styled.div`
  background: ${(props) => (props.checkout ? `red` : `blue`)};
  height: ${(props) => (props.checkout ? `133px` : `400px`)};
  width: ${(props) => (props.checkout ? `100px` : `300px`)};

  ${(props) => (props.checkout ? `` : "margin: auto;")};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    &:first-child {
      margin-right: 0.5rem;
    }
  }
`;

const Price = styled(StyledH3)``;

function Product({ id, name, price, quantity, isCheckout }) {
  const [, dispatch] = useCartContext();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: { id: id, name: name, price: price },
    });
  };

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", id: id });
  };

  return (
    <ProductContainer checkout={isCheckout}>
      <PlaceholderImage checkout={isCheckout} />

      <div>
        <Paragraph>{name}</Paragraph>
        <Price>
          <CurrencyFormat
            value={price}
            prefix={"$"}
            decimalScale={2}
            displayType={"text"}
          />
        </Price>
      </div>

      {isCheckout && <Paragraph>Quantity: {quantity}</Paragraph>}

      {isCheckout ? (
        <ButtonContainer>
          <Button onClick={addToCart} text="+" size="sm" type="outline" />
          <Button onClick={removeFromCart} text="-" size="sm" type="outline" />
        </ButtonContainer>
      ) : (
        <Button onClick={addToCart} text="Add to Cart" />
      )}
    </ProductContainer>
  );
}

export default Product;
