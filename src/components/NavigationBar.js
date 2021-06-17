import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import { useSelector, useDispatch } from 'react-redux'

const NavigationBar = () => {
    // this should actually be a redux state check 
    // const [logged, setLogged] = useState(false)

    const dispatch = useDispatch();
    const { log_status } = useSelector(state => state)
    
    const toggleLog = () => {
        dispatch({ type: 'TOGGLE_LOG' })
    }

    const loginOrLogoutButton = () => {
        if (log_status) {
            return (
                <Button>Logout</Button>
            )
        } else {
            return (
                <Button>Login</Button>
            )
        }
    }

    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Navbar.Brand>Nav Brand</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/plants">Plants</Nav.Link>
                    {/* profile will ask for login if not yet */}
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
                {/* login will be a popup  */}
                {loginOrLogoutButton()}
            </Navbar>
        </>
    )
};
export default NavigationBar;