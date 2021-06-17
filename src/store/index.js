import { createStore, combineReducers } from 'redux';

// import reducers here 
import user from './reducers/user'
import dummy from './reducers/dummy'

// add reducer to object
const reducer = combineReducers({
    user,
    dummy
})

const store = createStore(reducer)

export default store;