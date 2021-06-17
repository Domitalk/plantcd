// sample store + reducer + action all combined 

import { createStore, combineReducers } from 'redux';

// import reducers here 
import user from './reducers/user'
import dummy from './reducers/dummy'

const reducer = combineReducers({
    user,
    dummy
})

const store = createStore(reducer)

export default store;





// const initialState = { user_name: 'no_name', log_status: false }

// const userReducer = (state = initialState, action) => {
//     if (action.type === 'SET_USER') {
//         return {
//             ...state,
//             user_name: 'reducer_called_test_name'
//         }
//     }

//     if (action.type === 'CLEAR_NAME') {
//         return {
//             ...state,
//             user_name: 'no_name'
//         }
//     }

//     if (action.type === 'TOGGLE_LOG') {
//         return {
//             ...state,
//             log_status: !state.log_status
//         }
//     }

//     return state
// }

