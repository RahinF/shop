import React, { useState } from "react";
import Product from "./Product";
import { Container } from "./globalStyles";
import styled from "styled-components";

const ProductFlexbox = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

function Shop() {
  const [items] = useState([
    { id: 1, name: "Dress", price: 10.99 },
    { id: 2, name: "Top", price: 20.50 },
    { id: 3, name: "Shirt", price: 30.00 },
    { id: 4, name: "Jeans", price: 30.99 },
  ]);

  return (
    <Container>
      <ProductFlexbox>
        {items.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        ))}
      </ProductFlexbox>
    </Container>
  );
}

export default Shop;
