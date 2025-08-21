export const getCartCount = (cart) =>
  cart.reduce((total, item) => total + (item.quantity || 1), 0);

export const getCartSubtotal = (cart) =>
  cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

export const getCartTax = (subtotal) => subtotal * 0.1; 

export const getCartTotal = (cart) => {
  const subtotal = getCartSubtotal(cart);
  return subtotal + getCartTax(subtotal);
};
