
// get cart from local storage
const getFromLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart || Date.now > cart?.timestamp){
    return clearLocalStorage();
  } 
  
    else return cart.data;
};

// save cart to local storage
const saveToLocalStorage = (cart) => {
  const data = {
    data: cart,
    timestamp: Date.now() + 1000 * 60 * 60, // { 1 hr }
  };

  localStorage.setItem("cart", JSON.stringify(data));
};

const clearLocalStorage = () => {
  localStorage.removeItem("cart");
  return [];
};

// inital state
export const initialState = {
  cart: getFromLocalStorage(),
};

// get item total
export const getTotalPrice = (cart) =>
  cart?.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

// get cart quantity
export const getItemTotal = (cart) => 
  cart?.reduce((total, item) => total + item.quantity, 0);

// increase item qty
const addToCart = (cart, newItem) => {
  const index = cart.findIndex((item) => item.id === newItem.id);

  let newCart = cart;

  if (index === -1) {
    newCart = [...cart, { ...newItem, quantity: 1 }];
  } 

  else {
    newCart[index].quantity++;
  }

  saveToLocalStorage(newCart);
  return newCart;

};

// decrease item qty
const removeFromCart = (cart, newItemId) => {
  const index = cart.findIndex((item) => item.id === newItemId);

  let newCart = cart;

  if (newCart[index].quantity === 1) {
    newCart = newCart.filter((item) => item.id !== newItemId);

    if(!newCart.length){
      return clearLocalStorage();
    }
  } 
  
  else {
    newCart[index].quantity--;
  }

  saveToLocalStorage(newCart);
  return newCart;
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
