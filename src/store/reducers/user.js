import {
    SET_USER,
    CLEAR_NAME,
    TOGGLE_LOG,
    SIGN_IN
} from '../actions/user'


const initialState = {
    user_name: 'no_name',
    jwt: '',
    log_status: false
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user_name: action.userInfo.user.user_name,
                jwt: action.userInfo.jwt,
                log_status: true
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
        // case SIGN_IN:
        //     return {

        //     }
        default:
            return state 
    }
    console.log("user/reducer", state)

}

export default userReducer; 