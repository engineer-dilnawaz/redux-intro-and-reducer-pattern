import { createStore } from "redux";
import { myCreateStore } from "./my-redux";

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
const myStore = myCreateStore(reducer);

console.log(store);
console.log(myStore);
const unsubscribe = myStore.subscribe(function () {
  console.log(myStore.getState(), "First");
  postCountElement.innerText = myStore.getState().post;
});

const unsubscribe1 = myStore.subscribe(function () {
  console.log("H1 1");
  postCountElement.innerText = myStore.getState().post;
});

const unsubscribe2 = myStore.subscribe(function () {
  console.log("H1 2");
  postCountElement.innerText = myStore.getState().post;
});
myStore.dispatch({ type: INCREMENT });
unsubscribe2();
unsubscribe1();
// unsubscribe();

postCountElement.innerText = myStore.getState().post;

// console.log(store.getState());
myStore.dispatch({ type: INCREMENT });
// console.log(myStore.getState());
myStore.dispatch({ type: INCREASE_BY, payload: 10 });

myStore.dispatch({ type: DECREASE_BY, payload: 5 });

postCountElement.addEventListener("click", function () {
  myStore.dispatch({ type: INCREMENT });
});
