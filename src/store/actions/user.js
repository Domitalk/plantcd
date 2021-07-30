import BackendAddress from '../../constants/BackendAddress'

export const SET_USER = 'SET_USER';
export const CLEAR_NAME = 'CLEAR_NAME';
export const TOGGLE_LOG = 'TOGGLE_LOG';

export const loginUser = (userInfo) => {
    const user_name = userInfo.email
    const password = userInfo.password
    return async dispatch => {
        const response = await fetch(`${BackendAddress.API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user": {
                    user_name,
                    password
                }
            })
        })
        const rData = await response.json()
        // console.log("actions/users if createUser worked and setItem Async worked", rData)

        dispatch({ 
            type: SET_USER,
            userInfo: rData
        })
    }
}

export const createUser = (userInfo) => {
    const user_name = userInfo.email
    const password = userInfo.password
    return async dispatch => {
        const response = await fetch(`${BackendAddress.API}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user": {
                    user_name,
                    password
                }
            })
        })
        const rData = await response.json()
        console.log("actions/users if createUser worked and setItem Async worked", rData)

        dispatch({
            type: SET_USER,
            userInfo: rData
        })
    }
}