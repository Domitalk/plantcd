import { render, screen } from '@testing-library/react';
import HomeScreen from './HomeScreen';
import { Provider } from 'react-redux';
import store from '../store/index.js'

test('description', () => {
    render(<Provider store={store}><HomeScreen /></Provider>)
    const homeScreenPlaceholder = screen.getByText(/homescreen/i)
    expect(homeScreenPlaceholder).toBeInTheDocument()
})
