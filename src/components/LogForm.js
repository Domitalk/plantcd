import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import Form from 'react-bootstrap/Form'

const LogForm = () => {
    // const dispatch = useDispatch();
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
    // how to use 
    // <Form.Label>Name</Form.Label>
    // <Form.Control type='text' onChange={ e => setField('name', e.target.value) }/>

    console.log(form)
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
        </Form>
    )
}

export default LogForm; 