import { createStore } from "redux";

import { productsList } from "./productsList";

const initialState = {
  products: productsList,
  cartItems: [],
  wishList: [],
};

const CART_ADD_ITEM = "cart/addItem";
const CART_REMOVE_ITEM = "cart/removeItem";
const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";

const WISHLIST_ADD_ITEM = "wishList/addItem";
const WISHLIST_REMOVE_ITEM = "wishList/removeItem";

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CART_ADD_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };
    case CART_INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId)
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          return cartItem;
        }),
      };
    case CART_DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((cartItem) => {
            if (cartItem.productId === action.payload.productId)
              return {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              };
            return cartItem;
          })
          .filter((cartItem) => cartItem.quantity > 0),
      };
    case WISHLIST_ADD_ITEM:
      return {
        ...state,
        wishList: [...state.wishList, action.payload.productId],
      };
    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishList: state.wishList.filter(
          (product) => product !== action.payload.productId
        ),
      };
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 1, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 12, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 18, quantity: 1 },
});
store.dispatch({
  type: CART_ADD_ITEM,
  payload: { productId: 5, quantity: 1 },
});

store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: { productId: 18 },
});

store.dispatch({
  type: CART_REMOVE_ITEM,
  payload: { productId: 12 },
});

store.dispatch({
  type: CART_INCREASE_ITEM_QUANTITY,
  payload: { productId: 5 },
});
store.dispatch({
  type: CART_INCREASE_ITEM_QUANTITY,
  payload: { productId: 5 },
});
store.dispatch({
  type: CART_INCREASE_ITEM_QUANTITY,
  payload: { productId: 5 },
});
store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 5 },
});
store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 5 },
});
store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 5 },
});
store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 5 },
});
store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 5 },
});

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 1 },
});

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 15 },
});

store.dispatch({
  type: WISHLIST_ADD_ITEM,
  payload: { productId: 8 },
});

store.dispatch({
  type: WISHLIST_REMOVE_ITEM,
  payload: { productId: 1 },
});

console.log(store.getState().wishList);
