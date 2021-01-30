// inital state
export const initialState = {
  cart: [],
};
// get cart from local storage

// save cart to local storage

// get item total
export const getTotalPrice = (cart) =>
  cart?.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

// get cart quantity
export const getItemTotal = (cart) =>
  cart?.reduce((total, item) => total + item.quantity, 0);

// increase item qty
const addToCart = (cart, newItem) => {

  const index = cart.findIndex((item) => item.id === newItem.id);

  if (index === -1) {
    const updatedCart = [...cart, { ...newItem, quantity: 1 }];
    return updatedCart;
  }

  else {
    cart[index].quantity++;
  }

  return cart;
};

// decrease item qty
const removeFromCart = (cart, newItemId) => {
  const index = cart.findIndex((item) => item.id === newItemId);

  if (cart[index].quantity === 1) {
    const newCart = cart.filter((item) => item.id !== newItemId);
    return newCart;
  } 
  
  else {
    cart[index].quantity--;
  }

  return cart;
};

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: addToCart(state.cart, action.item) };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: removeFromCart(state.cart, action.id),
      };

    default:
      return state;
  }
};

export default reducer;
