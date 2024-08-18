import Header from '@/app/layout/header';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

jest.mock('../../app/layout/items-menu', () => ({
  itemsMenu: [
    {
      label: 'Characters',
      icon: 'img',
      to: '/',
    },
    {
      label: 'Locations',
      icon: 'img',
      to: '/locations',
    },
    ,
  ],
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('Header', () => {
  it('should be rendered the logo link', () => {
    render(<Header />);

    const logo = screen.getByRole('link', { name: 'Rick and Morty' });
    const logoImage = screen.getByRole('img', { name: 'Rick and Morty' });

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('href', '/');
    expect(logoImage).toBeInTheDocument();
  });

  it('should be rendered the header title', () => {
    render(<Header />);

    const title = screen.getByRole('heading', {
      name: 'Rick and Morty - Characters',
    });

    expect(title).toBeInTheDocument();
  });

  it('should be rendered the header links', () => {
    render(<Header />);

    const characters = screen.getByRole('link', { name: 'Characters' });
    const locations = screen.getByRole('link', { name: 'Locations' });

    expect(characters).toBeInTheDocument();
    expect(characters).toHaveAttribute('href', '/');

    expect(locations).toBeInTheDocument();
    expect(locations).toHaveAttribute('href', '/locations');
  });

  it('snapshot', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
