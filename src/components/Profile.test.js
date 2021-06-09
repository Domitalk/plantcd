import { render, screen } from '@testing-library/react';
import Profile from './Profile';

test('description', () => {
    render(<Profile />)
    const profilePlaceholder = screen.getByText(/profile/i)
    expect(profilePlaceholder).toBeInTheDocument()
})
