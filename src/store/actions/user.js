import BackendAddress from '../../constants/BackendAddress'

export const SET_USER = 'SET_USER';
export const CLEAR_NAME = 'CLEAR_NAME';
export const TOGGLE_LOG = 'TOGGLE_LOG';

export const createUser = (userInfo) => {
    return async dispatch => {
        const response = await fetch(`${BackendAddress.API}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ... userInfo
            })
        })
        const rData = await response.json()

        // figure out how to payload the rData and change the reducer function that corresponds 
        dispatch({ 
            type: SET_USER,
        })
    }
}