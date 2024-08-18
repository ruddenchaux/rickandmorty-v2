import Favorites, { metadata } from '@/app/favorites/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Favorites', () => {
  it('should be rendered', () => {
    render(<Favorites />);

    expect(screen.getByText('Coming soon')).toBeInTheDocument();
  });

  it('should be metadated', () => {
    expect(metadata).toEqual({
      title: 'Rick and Morty Favorites',
    });
  });
});
