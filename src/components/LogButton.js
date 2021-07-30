import { useSelector } from 'react-redux'
import { useState } from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import LoginForm from './LoginForm'

const LogButton = () => {
    // const dispatch = useDispatch();
    const [show, setShow] = useState(false)

    const { log_status } = useSelector(state => state.user)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const showLoginOrLogoutButton = () => {
        if (log_status) {
            return <Button onClick={handleLogout}>Logout</Button>
        } else {
            return <Button onClick={handleShow}>Login</Button>
        }
    }

    const handleLogout = () => {
        // aka create dialog for are you sure you want to log out and dispatch if confirmed


    }

    return (
        <>
            {showLoginOrLogoutButton()}
            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Plantcd</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <LoginForm/>
                </Modal.Body>
                <Modal.Footer>
                    smaller font, centered, greyed out 
                    forgot password?
                    link to a diff page and closeout the modal? or just swap what is shown?
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default LogButton; 