import {
    SET_USER,
    CLEAR_NAME,
    TOGGLE_LOG
} from '../actions/user'




const initialState = {
    user_name: 'no_name',
    log_status: false
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user_name: 'reducer_called_test_name'
            }
        case CLEAR_NAME:
            return {
                ...state,
                user_name: 'no_name'
            }
        case TOGGLE_LOG:
            return {
                ...state,
                log_status: !state.log_status
            }
        default:
            return state 
    }

}

export default userReducer; 