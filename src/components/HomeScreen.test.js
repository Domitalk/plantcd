import { render, screen } from '@testing-library/react';
import HomeScreen from './HomeScreen';

import { Provider } from 'react-redux';
import store from '../store/index.js'

const ProvidedHomeScreen = () => {
    return (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    )
}

test('description', () => {
    render(<ProvidedHomeScreen/>)
    const homeScreenPlaceholder = screen.getByText(/homescreen/i)
    expect(homeScreenPlaceholder).toBeInTheDocument()
})
