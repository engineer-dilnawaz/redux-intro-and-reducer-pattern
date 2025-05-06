import { combineReducers, createStore } from "redux";

import cartReducer, {
  CART_ADD_ITEM,
  CART_DECREASE_ITEM_QUANTITY,
  CART_INCREASE_ITEM_QUANTITY,
  CART_REMOVE_ITEM,
} from "./cartReducer";
import wishListReducer, {
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM,
} from "./wishListReducer";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cartItem: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(
  rootReducer,
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

console.log(store.getState());
