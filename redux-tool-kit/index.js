const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");

console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(cakeActions.ordered(2));
store.dispatch(cakeActions.ordered(2));
store.dispatch(cakeActions.restocked(3));

unsubscribe();
