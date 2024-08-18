import BottomNavigation from '@/app/layout/bottom-navigation';
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

describe('BottomNavigation', () => {
  it('should be rendered with all links', () => {
    const { container } = render(<BottomNavigation />);

    const characters = screen.getByRole('link', { name: 'Characters' });
    const locations = screen.getByRole('link', { name: 'Locations' });

    expect(characters).toBeInTheDocument();
    expect(characters).toHaveAttribute('href', '/');

    expect(locations).toBeInTheDocument();
    expect(locations).toHaveAttribute('href', '/locations');

    expect(container).toMatchSnapshot();
  });
});
