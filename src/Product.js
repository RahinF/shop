import React from "react";
import { useCartContext } from "./CartProvider";

function Product({ id, name, price }) {
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
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={addToCart}>Add</button>
      <button onClick={removeFromCart}>Remove</button>
    </div>
  );
}

export default Product;
