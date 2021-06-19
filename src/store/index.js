import { createStore, combineReducers } from 'redux';

// import reducers here 
import user from './reducers/user'
import dummy from './reducers/dummy'

// add reducer to object
const rootReducer = combineReducers({
    user,
    dummy
})

export default rootReducer; 
// const store = createStore(reducer)

// export default store;