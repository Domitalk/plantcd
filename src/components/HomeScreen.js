import { useSelector, useDispatch } from 'react-redux'

const HomeScreen = () => {
    // make a dummy testing for user_name 
    const dispatch = useDispatch()
    const { user_name, log_status } = useSelector(state => state.user)
    const { dummy } = useSelector(state => state.dummy )
    
    const testUserInfo = {
        user_name: 'test_user_name',
        first_name: 'test_first_name',
        middle_name: 'test_middle_name',
        last_name: 'test_last_name'
    }

    const testUserNameDispatch = (userInfo) => {
        dispatch({
            type: 'SET_USER',
            userInfo: testUserInfo
        })
    }

    const clearUserName = () => {
        dispatch({ type: 'CLEAR_NAME' })
    }

    const toggleLogStatus = () => {
        dispatch({type: 'TOGGLE_LOG'})
    }

    return (
        <div style={{ height: "500px", width: "500px" }}>HomeScreen
            <p>USER'S NAME: {user_name} </p>
            <p>LOG_STATUS: {log_status? "YES": "NO"} </p>

            <button onClick={testUserNameDispatch}>test user_name</button>
            
            <button onClick={clearUserName}>clear user_name</button>

            <button onClick={toggleLogStatus}>toggle log_status</button>

            <p>DUMMY TEST: {dummy} </p>


        </div>

    )
};
export default HomeScreen;