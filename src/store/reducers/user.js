import {
    SET_USER,
    LOGOUT_USER
} from '../actions/user'


const initialState = {
    user_name: 'intialState name',
    jwt: 'intialState jwt',
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
        case LOGOUT_USER:
            return {
                user_name: 'user logged out',
                jwt: '',
                log_status: false
            }
        default:
            return state 
    }

}

export default userReducer; 