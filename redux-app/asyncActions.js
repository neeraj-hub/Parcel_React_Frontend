const { default: axios } = require("axios")
const { createStore, applyMiddleware } = require("redux")
const { thunk } = require("redux-thunk")
const logger = require('redux-logger')



const initialState = {
    loading: false,
    user: [],
    error: ''
}
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

//define action creators
const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}
const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}
const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                error: action.payload
            }    
    }
}
//define async action creator
const fetchUser = () =>{
    return function(dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/usersas')
        .then( response => {
            const users = response.data.map(user => user.id)
            dispatch(fetchUserSuccess(users))
        }).catch(error => {
            dispatch(fetchUserFailure(error.message))
        })
    }
}

const store = createStore(reducer, applyMiddleware(thunk, logger.createLogger()))
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchUser()) // dispatch an action to the store to update the state