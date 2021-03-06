import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { loginUser, createUser, logoutUser } from '../store/actions/user.js'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const LogButton = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [formSelection, setFormSelection] = useState("login")

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
    }

    const { log_status } = useSelector(state => state.user)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleLogout = () => {
        // aka create dialog for are you sure you want to log out and dispatch if confirmed
        dispatch(logoutUser())
        setFormSelection("login")
        
    }

    const showLoginOrLogoutButton = () => {
        if (log_status) {
            return <Button onClick={handleLogout}>Logout</Button>
        } else {
            return <Button onClick={handleShow}>Login</Button>
        }
    }

    const handleSubmit = () => {
        dispatch(loginUser(form))
        setForm({
            email: '',
            password: ''
        })
        setShow(false)
    }

    const handleSignup = () => {
        // Must create a dispatch for Signup and import it 
        dispatch(createUser(form))
        setForm({
            email: '',
            password: ''
        })
        setShow(false)
    }

    const handleForgot = () => {
        // Must create a dispatch for Forgot password and import it 
        dispatch()
        setForm({
            email: '',
            password: ''
        })
    }

    const showLoginOrSignupOrForgotPassword = () => {
        if (formSelection === "signup") {
            return (
                <Form>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={form.email}
                                onChange={e => setField('email', e.target.value)}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={form.password}
                                onChange={e => setField('password', e.target.value)}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={form.password}
                                onChange={e => setField('password', e.target.value)}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Button onClick={handleSignup}>Sign Up</Button>
                </Form>
            )
        } else if (formSelection === "forgot") {
            return (
                <Form>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={form.email}
                                onChange={e => setField('email', e.target.value)}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Button onClick={handleForgot}>Reset Password</Button>
                </Form>
            )

        } else {
            // login
            return (
                <Form>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={form.email}
                                onChange={e => setField('email', e.target.value)}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Password <button className="link-button-password" onClick={() => handleChangeFormSelection("forgot")}>forgot password?</button></Form.Label>
                            <Form.Control
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={form.password}
                                onChange={e => setField('password', e.target.value)}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Button onClick={handleSubmit}>Sign in</Button>
                </Form>
            )
        }
    }

    const showProperModalFooter = () => {
        if (formSelection === "login") {
            return (
                <Modal.Footer>
                    New to Plantcd? <button className="link-button" onClick={() => handleChangeFormSelection("signup")}>Create an account</button>
                </Modal.Footer>
            )
        } else {
            return (
                <Modal.Footer>
                    <button className="link-button" onClick={() => handleChangeFormSelection("login")}>Back to login</button>
                </Modal.Footer>
            )
        }
    }

    const handleChangeFormSelection = (newSelection) => {
        setFormSelection(newSelection)
    }

    return (
        <>
            {showLoginOrLogoutButton()}
            <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Plantcd</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    {showLoginOrSignupOrForgotPassword()}
                </Modal.Body>
                    {showProperModalFooter()}
            </Modal>
        </>
    )
}

export default LogButton; 