import React, { useState } from "react";
import Product from "./Product";
import { Container } from "./globalStyles";

function Shop() {
  const [items] = useState([
    { id: 1, name: "Dress", price: 10 },
    { id: 2, name: "Top", price: 20 },
    { id: 3, name: "Shirt", price: 30 },
  ]);

  return (
    <Container>
      {items.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
        />
      ))}
    </Container>
  );
}

export default Shop;
