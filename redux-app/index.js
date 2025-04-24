const redux = require('redux')
const createStore = redux.createStore;


const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCK = 'CAKE_RESTOCK';

function orderCake(qty=1) {
return{
    type: CAKE_ORDERED,
    payload: qty
}
}
function restockCake(qty) {
    return{
        type: CAKE_RESTOCK,
        payload: qty
    }
}

const initialState = {
    numOfCakes: 10
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case CAKE_ORDERED: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }
        case CAKE_RESTOCK: return {
            ...state,
            numOfCakes: state.numOfCakes + action.payload
        }
        default: return state
    }
}


const store = createStore(reducer); //holds the state of the app

console.log("Initial state", store.getState()) // get the initial state of the store
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState())) // subscribe to the store to get notified when the state changes

store.dispatch(orderCake()) // dispatch an action to the store to update the state
store.dispatch(orderCake()) // dispatch an action to the store to update the state
store.dispatch(orderCake()) // dispatch an action to the store to update the state
store.dispatch(restockCake(5)) // dispatch an action to the store to update the state
store.dispatch(orderCake(2)) // dispatch an action to the store to update the state

unsubscribe(); // unsubscribe from the store to stop getting notified when the state changes
