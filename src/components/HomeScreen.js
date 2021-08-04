import { useSelector } from 'react-redux'

const HomeScreen = () => {
    // make a dummy testing for user_name 
    const { user_name, log_status, jwt } = useSelector(state => state.user)
    
    return (
        <div style={{ height: "500px", width: "500px" }}>HomeScreen
            <p>USER'S NAME: {user_name} </p>
            <p>JWT: {jwt}</p>
            <p>LOG_STATUS: {log_status? "YES": "NO"} </p>
        </div>

    )
};
export default HomeScreen;