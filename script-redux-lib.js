import { createStore } from "redux";

const postCountElement = document.querySelector(".post-count");

const initialState = {
  count: 0,
  name: "Dilnawaz",
  age: 27,
  post: 0,
};

// let prevState = state;

// function increment() {
//   // mutating state
//   //   state.count = state.count + 1;

//   // not mutating state
//   state = { ...state, count: state.count + 1 };
// }

// increment();
// console.log(state);
// increment();
// console.log(state);
// increment();
// console.log(state);

const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREASE_BY = "post/increasetBy";
const DECREASE_BY = "post/decreasetBy";

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, post: state.post + 1 };
    case DECREMENT:
      return { ...state, post: state.post - 1 };
    case INCREASE_BY:
      return { ...state, post: state.post + action.payload };
    case DECREASE_BY:
      return { ...state, post: state.post - action.payload };
    default:
      return state;
  }
  //   if (action.type === INCREMENT) {
  //     return { ...state, post: state.post + 1 };
  //   } else if (action.type === DECREMENT) {
  //     return { ...state, post: state.post - 1 };
  //   } else if (action.type === INCREASE_BY) {
  //     return { ...state, post: state.post + action.payload };
  //   } else if (action.type === DECREASE_BY) {
  //     return { ...state, post: state.post - action.payload };
  //   }
  //   return state;
}

// // What redux will do
// console.log(state);
// state = reducer(state, { type: "post/increment" });
// console.log(state);
// state = reducer(state, { type: "post/increment" });
// console.log(state);
// state = reducer(state, { type: "post/decrement" });
// console.log(state);
// state = reducer(state, { type: "post/incrementBy", payload: 10 });
// console.log(state);
// state = reducer(state, { type: "post/incrementBy", payload: 10 });
// console.log(state);
// state = reducer(state, { type: "post/incrementBy", payload: 10 });
// console.log(state);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store);
const unsubscribe = store.subscribe(function () {
  console.log(store.getState());
  postCountElement.innerText = store.getState().post;
});

// unsubscribe();

postCountElement.innerText = store.getState().post;

// console.log(store.getState());
store.dispatch({ type: INCREMENT });
// console.log(store.getState());
store.dispatch({ type: INCREASE_BY, payload: 10 });
store.dispatch({ type: DECREASE_BY, payload: 5 });

postCountElement.addEventListener("click", function () {
  store.dispatch({ type: INCREMENT });
});
