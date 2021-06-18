import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const LogButton = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false)

    const { log_status } = useSelector(state => state.user)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const toggleLog = () => {
        dispatch({ type: 'TOGGLE_LOG' })
    }

    return (
        <>
            <Button onClick={handleShow}>{log_status? `Logout` : `Login` }</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log-in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    form for log in or sign up
                    

                </Modal.Body>
            </Modal>
        </>
    )
}

export default LogButton; 