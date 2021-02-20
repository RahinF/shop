import React from "react";
import Product from "./Product";
import { useCartContext } from "./CartProvider";
import { Container, Paragraph } from "./globalStyles";
import styled from "styled-components";
import { getItemTotal, getTotalPrice } from "./cartReducer";
import CurrencyFormat from "react-currency-format";
import Button from './Button'

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

function Checkout() {
  const [{ cart }, dispatch] = useCartContext();

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <CheckoutContainer>
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

      <Summary>
        <Paragraph>Total Items</Paragraph>
        <p>{getItemTotal(cart)}</p>

        <Paragraph>Total Price</Paragraph>
        <p>
          <CurrencyFormat
            value={getTotalPrice(cart)}
            prefix={"$"}
            decimalScale={2}
            displayType={"text"}
          />
        </p>

         <Button text='Checkout' />
         <Button onClick={clearCart} text='Clear' outline/>
      </Summary>
    </CheckoutContainer>
  );
}

export default Checkout;
