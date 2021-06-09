import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavigationBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Nav Brand</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#plants">Plants</Nav.Link>
                    <Nav.Link href="#login">Login</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavigationBar