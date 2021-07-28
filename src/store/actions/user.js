import BackendAddress from '../../constants/BackendAddress'

export const SET_USER = 'SET_USER';
export const CLEAR_NAME = 'CLEAR_NAME';
export const TOGGLE_LOG = 'TOGGLE_LOG';
export const SIGN_IN = 'SIGN_IN'

export const createUser = (userInfo) => {
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

        // figure out how to payload the rData and change the reducer function that corresponds 
        console.log("actions/users if createUser worked and setItem Async worked", rData)

        // right now rData looks like : 
        
        // {
        //     jwt: ";lakdjsf;lkajsd;f",
        //     user: {
        //         created_at: "2021-07-28T16:22:08.503Z",
        //         id: 1,
        //         password_digest: "$2a$12$EI0nMCPRQwPecNmWdtrkFeW2cWxuR5NsuyPQ2z2VUxGeLp4WkUhG.",
        //         updated_at: "2021-07-28T16:22:08.503Z",
        //         user_name: "user_name_1"
        //     }
        // }

        // now that we're getting login working, figure out where to store the jwt 
        // reshape the returned data because its nested differently than below 

        dispatch({ 
            type: SET_USER,
            userInfo: rData
        })
    }
}