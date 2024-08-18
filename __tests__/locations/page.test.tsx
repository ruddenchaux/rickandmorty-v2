import Locations, { metadata } from '@/app/locations/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Locations', () => {
  it('should be rendered', () => {
    render(<Locations />);

    expect(screen.getByText('Coming soon')).toBeInTheDocument();
  });

  it('should be metadated', () => {
    expect(metadata).toEqual({
      title: 'Rick and Morty Locations',
    });
  });
});
