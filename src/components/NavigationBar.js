import LogButton from './LogButton'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavigationBar = () => {
    return (
        <>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Navbar.Brand>Nav Brand</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/plants">Plants</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
                <LogButton/>
            </Navbar>
        </>
    )
};
export default NavigationBar;