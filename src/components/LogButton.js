import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import LogForm from './LogForm'

const LogButton = () => {
    // const dispatch = useDispatch();

    const [show, setShow] = useState(false)

    const { log_status } = useSelector(state => state.user)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    // const toggleLog = () => {
    //     dispatch({ type: 'TOGGLE_LOG' })
    // }

    return (
        <>
            <Button onClick={handleShow}>{log_status? `Logout` : `Login` }</Button>
            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Plantcd</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <LogForm/>
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