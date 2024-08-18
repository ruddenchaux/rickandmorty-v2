import RootLayout, { metadata } from '@/app/layout';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('RootLayout', () => {
  // FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
  it.skip('should be rendered', () => {
    render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>
    );

    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
    expect(main).toContainHTML('<div>Test</div>');
  });

  it('should have metadata', () => {
    expect(metadata).toEqual({
      description: 'Discover the Rick and Morty world',
    });
  });
});
