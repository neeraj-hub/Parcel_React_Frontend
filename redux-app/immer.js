// immer is a library that allows you to work with immutable state in a more convenient way.
const immer = require('immer').produce
const { createStore } = require('redux')

const initialState = {
  "id": 1,
  "name": "Patricia Lebsack",
  "username": "Karianne",
  "email": "Julianne.OConner@kory.org",
  "address": {
    "street": "Hoeger Mall",
    "suite": "Apt. 692",
    "city": "South Elvis",
    "zipcode": "53919-4257",
    "geo": {
      "lat": "29.4572",
      "lng": "-164.2990"
    }
}
}

const CHANGE_STREET = 'CHANGE_STREET'

const changeStreetName = (streetName) =>{
    return {type: CHANGE_STREET,
    payload: streetName}
}

const reducer = (state= initialState, action) =>{
    switch(action.type){
        case CHANGE_STREET:
            // return {
            //     ...state,
            //     address: {
            //         ...state.address,
            //         street: action.payload
            //     }
            return immer(state, (draft) => {
                draft.address.street = action.payload
            })
            }
    }

const store = createStore(reducer)
const unsubscribe = store.subscribe(() => console.log('Updated state:', store.getState()))
store.dispatch(changeStreetName('Hogwarts Street'))
unsubscribe()