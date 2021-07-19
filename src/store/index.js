import {
    applyMiddleware,
    compose,
    createStore,
    combineReducers
} from 'redux'
import thunkMiddleware from 'redux-thunk'

// import reducers here 
import user from './reducers/user'
import dummy from './reducers/dummy'

const rootReducer = combineReducers({
    user,
    dummy
})

const configureStore = (preloadedState) => {
    const middlewares = [thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer]
    const composedEnhancers = compose(...enhancers)

    const rStore = createStore(rootReducer, preloadedState, composedEnhancers)

    return rStore
}

const store = configureStore()

export default store;