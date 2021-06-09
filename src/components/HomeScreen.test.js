import { render, screen } from '@testing-library/react';
import HomeScreen from './HomeScreen';

test('description', () => {
    render(<HomeScreen />)
    const homeScreenPlaceholder = screen.getByText(/homescreen/i)
    expect(homeScreenPlaceholder).toBeInTheDocument()
})
