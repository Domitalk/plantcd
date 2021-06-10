// sample store + reducer + action all combined 

import { createStore } from 'redux';

const userReducer = (state = { user_name: 'no_name' }, action) => {
    if (action.type === 'SET_USER') {
        return {
            user_name: 'reducer_called_test_name'
        }
    }
    return state
}

const store = createStore(userReducer)

export default store;
