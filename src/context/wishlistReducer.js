export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_WISHLIST":
      if (state.find((item) => item.id === action.payload.id)) {
        return state.filter((item) => item.id !== action.payload.id);
      }
    
      return [...state, action.payload];

    default:
      return state;
  }
};
