import React from "react";
import Product from "./Product";
import { useCartContext } from "./CartProvider";
import { Container, StyledH2, Paragraph } from "./globalStyles";
import styled from "styled-components";
import { getItemTotal, getTotalPrice } from "./cartReducer";
import CurrencyFormat from "react-currency-format";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const CheckoutContainer = styled(Container)`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 1rem;
`;
const Summary = styled.div`
  border: 1px solid #8d8d8d;
  padding: 1rem;
  height: min-content;
`;

const CheckoutItems = styled.div`
  display: grid;
  gap: 1rem;
`;

const EmptyCart = styled.div`
  border: 1px solid #8d8d8d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`;

function Checkout() {
  const [{ cart }, dispatch] = useCartContext();

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <CheckoutContainer>
      {cart?.length === 0 ? (
        <EmptyCart>
          <StyledH2>Cart is Empty.</StyledH2>
          <Paragraph>
            Looks like you have no items in your shopping cart.
          </Paragraph>
          <Paragraph>
            Click{" "}
            <NavLink to="/shop" exact={true}>
              here
            </NavLink>{" "}
            to continue shopping.
          </Paragraph>
        </EmptyCart>
      ) : (
        <CheckoutItems>
          {cart?.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              isCheckout={true}
            />
          ))}
        </CheckoutItems>
      )}

      <Summary>
        <Paragraph>Total Items</Paragraph>
        <Paragraph>{getItemTotal(cart)}</Paragraph>

        <Paragraph>Total Price</Paragraph>
        <Paragraph>
          <CurrencyFormat
            value={getTotalPrice(cart)}
            prefix={"$"}
            decimalScale={2}
            displayType={"text"}
          />
        </Paragraph>

        <ButtonContainer>
          <Button text="Checkout" size='sm'/>
          <Button onClick={clearCart} text="Clear" type="outline" size='sm'/>
        </ButtonContainer>

      </Summary>
    </CheckoutContainer>
  );
}

export default Checkout;
