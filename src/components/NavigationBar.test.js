import { render, screen } from '@testing-library/react';
import App from '../App'
import NavigationBar from './NavigationBar';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// initial renders
test('renders home button', () => {
    render(<NavigationBar />)
    const homeButton = screen.getByText(/home/i)
    expect(homeButton).toBeInTheDocument()
})
test('renders plants button', () => {
    render(<NavigationBar />)
    const plantsButton = screen.getByText(/plants/i)
    expect(plantsButton).toBeInTheDocument()

})
test('renders profile button', () => {
    // figure out how to id the profile button 
})
test('renders login button', () => {
    render(<NavigationBar />)
    const loginButton = screen.getByText(/login/i)
    expect(loginButton).toBeInTheDocument()

})

// button behaviors 
test('clicking home takes you to home screen', () => { })
test('clicking plants takes you to the plants page', () => { })
test('clicking the login button takes you to the login', () => { })
test('renders logout button after login', () => {})
test('clicking profile button takes you to the profile page', () => { })
