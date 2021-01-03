// any time any piece of your app wants to update state, it must do so through the Redux store

// Create redux store
const store = Redux.createStore(
    (state = 5) => state // This is a reducer function
);

// Get store state
store.getState();

// Define action
const action = { type: 'LOGIN' }; //  actions are messengers that deliver information about events happening in your app to the Redux store

// Dispatch action (send to the store)
store.dispatch(action);

// Reducer
const reducer = (state, action) => { // A reducer takes state and action as arguments, and it always returns a new state
    return action.type === 'LOGIN' ? { login: true } : state; // Do not mutate state here
};

// Subscribe
store.subscribe(); // This allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store

// Combine reducers to a root reducer
const rootReducer = Redux.combineReducers({
    auth: authenticationReducer,
    notes: notesReducer
});

// Handle asyc code
const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default) // Use middleware ReduxThunk
);

// Example
const LOGIN = 'LOGIN';                                  // Constants
const LOGOUT = 'LOGOUT';
const defaultState = {                                  // State
    authenticated: false
};
const authReducer = (state = defaultState, action) => { // Reducer
    switch (action.type) {
        case LOGIN:
        return {
            authenticated: true
        }
        case LOGOUT:
        return {
            authenticated: false
        }
        default:
        return state;
    }
};
const store = Redux.createStore(authReducer);           // Store
const loginUser = () => {                               // Actions
    return {
        type: LOGIN
    }
};
const logoutUser = () => {
    return {
        type: LOGOUT
    }
};

// Async example
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'
const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }
const handleAsync = () => {
    return function(dispatch) {
        dispatch(requestingData());
        setTimeout(function() {
        let data = {
            users: ['Jeff', 'William', 'Alice']
        }
        dispatch(receivedData(data));
        }, 2500);
    }
};
const defaultState = {
    fetching: false,
    users: []
};
const asyncDataReducer = (state = defaultState, action) => {
    switch(action.type) {
        case REQUESTING_DATA:
        return {
            fetching: true,
            users: []
        }
        case RECEIVED_DATA:
        return {
            fetching: false,
            users: action.users
        }
        default:
        return state;
    }
};
const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default)
);