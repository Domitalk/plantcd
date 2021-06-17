import { useSelector } from 'react-redux'

const HomeScreen = () => {
    // make a dummy testing for user_name 
    const { user_name } = useSelector(state => state.user_name)

    return (
        <div style={{ height: "500px", width: "500px" }}>HomeScreen
            <p>USER'S NAME: {user_name} </p>
         
        </div>

    )
};
export default HomeScreen;