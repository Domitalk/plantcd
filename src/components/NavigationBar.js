import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

function NavigationBar() {
    return (
        <>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand>Nav Brand</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#plants">Plants</Nav.Link>
                    {/* profile will ask for login if not yet */}
                    <Nav.Link href="#profile">Profile</Nav.Link>
                </Nav>
                {/* login will be a popup  */}
                <Button>Login</Button>
            </Navbar>
        </>
    )
}

export default NavigationBar