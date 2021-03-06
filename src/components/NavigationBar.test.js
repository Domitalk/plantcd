import { render, screen } from '@testing-library/react';
import NavigationBar from './NavigationBar';

import { Provider } from 'react-redux';
import store from '../store/index.js'

const ProvidedNavigationBar = () => {
    return (
        <Provider store={store}>
            <NavigationBar />
        </Provider>
    )
}

// initial renders
test('renders home button', () => {
    render(<ProvidedNavigationBar />)
    const homeButton = screen.getByText(/home/i)
    expect(homeButton).toBeInTheDocument()
})
test('renders plants button', () => {
    render(<ProvidedNavigationBar />)
    const plantsButton = screen.getByText(/plants/i)
    expect(plantsButton).toBeInTheDocument()
})
test('renders profile button', () => {
    render(<ProvidedNavigationBar />)
    const profileButton = screen.getByText(/profile/i)
    expect(profileButton).toBeInTheDocument()
})
test('renders either login or logout button', () => {
    render(<ProvidedNavigationBar />)
    const loginButton = screen.getByText(/log/i)
    expect(loginButton).toBeInTheDocument()
})

// button behaviors 

// test('clicking home takes you to home screen', () => { })
// test('clicking plants takes you to the plants page', () => { })
// test('clicking the login button takes you to the login', () => { })
// test('renders logout button after login', () => {})
// test('clicking profile button takes you to the profile page', () => { })
