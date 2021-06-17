import { useSelector, useDispatch } from 'react-redux'

const HomeScreen = () => {
    // make a dummy testing for user_name 
    const dispatch = useDispatch()
    const { user_name } = useSelector(state => state.user)
    const { dummy } = useSelector(state => state.dummy )
    

    const testUserNameDispatch = () => {
        dispatch({ type: 'SET_USER' })
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
            <button onClick={testUserNameDispatch}>test user_name</button>
            <button onClick={clearUserName}>clear user_name</button>

            <button onClick={toggleLogStatus}>toggle log_status</button>

            <p>DUMMY TEST: {dummy} </p>
        </div>

    )
};
export default HomeScreen;