const initialState = [];

export const WISHLIST_ADD_ITEM = "wishList/addItem";
export const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

export default function wishListReducer(state = initialState, action) {
  switch (action.type) {
    case WISHLIST_ADD_ITEM:
      return [...state, action.payload.productId];
    case WISHLIST_REMOVE_ITEM:
      return state.filter((product) => product !== action.payload.productId);
    default:
      return state;
  }
}
