import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { loginUser } from '../store/actions/user.js'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoginForm = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value 
        })
    }

    const handleSubmit = () => {
        dispatch(loginUser(form))
        setForm({
            email: '',
            password: ''
        })
    }

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
            <Button onClick={handleSubmit}>Submit</Button>
        </Form>
    )
}

export default LoginForm; 