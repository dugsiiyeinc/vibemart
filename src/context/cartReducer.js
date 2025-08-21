export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exist = state.find((item) => item.id === action.payload.id);

      if (exist) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      }

      return [...state, { ...action.payload }];
    }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload.id);

    case "INCREMENT":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREMENT":
      return state
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);


    case "CLEAR_CART":
      return []; // Return an empty array to clear the cart
    // -------------------------


    default:
      return state;
  }
};
