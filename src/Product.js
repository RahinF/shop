import React from "react";
import { useCartContext } from "./CartProvider";

function Product({ id, name }) {
  const [, dispatch] = useCartContext();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", item: { id: id, name: name } });
  };

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", id: id });
  };
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <button onClick={addToCart}>Add</button>
      <button onClick={addToCart}>Remove</button>
    </div>
  );
}

export default Product;
