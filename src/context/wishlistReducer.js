export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      if (state.find(item => item.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];

    case "REMOVE_FROM_WISHLIST":
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
};
