import { render, screen } from '@testing-library/react';
import Plants from './Plants';

test('description', () => {
    render(<Plants />)
    const plantsPlaceholder = screen.getByText(/plants/i)
    expect(plantsPlaceholder).toBeInTheDocument()
})
