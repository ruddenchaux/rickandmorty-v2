import Episodes, { metadata } from '@/app/episodes/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Episodes', () => {
  it('should be rendered', () => {
    render(<Episodes />);

    expect(screen.getByText('Coming soon')).toBeInTheDocument();
  });

  it('should be metadated', () => {
    expect(metadata).toEqual({
      title: 'Rick and Morty Episodes',
    });
  });
});
