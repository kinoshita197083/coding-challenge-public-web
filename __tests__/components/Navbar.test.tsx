import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar/Navbar';

describe('Navbar Component', () => {

    test('renders the navbar', () => {
        render(<Navbar />);
        // Check if the navbar is rendered
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    test('renders the logo', () => {
        render(<Navbar />);
        // Check if the logo is rendered
        expect(screen.getByTestId('logo')).toBeInTheDocument();
    });

    test('renders logo with correct href attribute', () => {
        render(<Navbar />);

        const logo = screen.getByTestId('logo-link');
        // Check if the logo has the correct href attribute
        expect(logo).toHaveAttribute('href', '/');
    });
})