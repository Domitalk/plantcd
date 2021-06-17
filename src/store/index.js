// sample store + reducer + action all combined 

import { createStore } from 'redux';

const initialState = { user_name: 'no_name', log_status: false }

const userReducer = (state = initialState, action) => {
    if (action.type === 'SET_USER') {
        return {
            ...state,
            user_name: 'reducer_called_test_name'
        }
    }

    if (action.type === 'CLEAR_NAME') {
        return {
            ...state,
            user_name: 'no_name'
        }
    }

    if (action.type === 'TOGGLE_LOG') {
        return {
            ...state,
            log_status: !state.log_status
        }
    }

    return state
}

const store = createStore(userReducer)

export default store;
