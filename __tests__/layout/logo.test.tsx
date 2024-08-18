import Logo from '@/app/layout/logo';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Logo', () => {
  it('should be rendered with the default size', () => {
    const { container } = render(<Logo />);

    const logoImage = screen.getByRole('img', { name: 'Rick and Morty' });

    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('height');
    expect(logoImage).toHaveAttribute('width');

    expect(container).toMatchSnapshot();
  });

  it('should be rendered with the custom size', () => {
    const { container } = render(<Logo height={60} width={60} />);

    const logoImage = screen.getByRole('img', { name: 'Rick and Morty' });

    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('height', '60');
    expect(logoImage).toHaveAttribute('width', '60');

    expect(container).toMatchSnapshot();
  });
});
