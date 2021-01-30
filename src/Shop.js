import React, { useState } from "react";
import Product from "./Product";
import {Container} from "./globalStyles"


function Shop() {
  const [items, setItems] = useState([
    { id: 1, name: "Dress" },
    { id: 2, name: "Top" },
    { id: 3, name: "Shirt" },
  ]);

  return (
    <Container>
      {items.map((item) => (
        <Product key={item.id} id={item.id} name={item.name} />
      ))}
    </Container>
  );
}

export default Shop;
