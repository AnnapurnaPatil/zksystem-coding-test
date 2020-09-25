import React from 'react';
import { render } from '@testing-library/react';
import StatusDetails from './StatusDetails'

test('renders learn react link', () => {
    const { getByText } = render(<StatusDetails />);
    const linkElement = getByText(/Details Page/i);
    expect(linkElement).toBeInTheDocument();
});
