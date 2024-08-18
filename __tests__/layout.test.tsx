import RootLayout, { metadata, viewport } from '@/app/layout';
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
      icons: [{ rel: 'apple-touch-icon', url: 'logo.svg' }],
      manifest: 'manifest.json',
      keywords: [
        'Rick and Morty',
        'Characters',
        'Episodes',
        'Locations',
        'Next.js',
        'Material-UI',
        'Cloudflare',
        'Cloudflare Pages',
      ],
    });
  });

  it('should have viewport', () => {
    expect(viewport).toEqual({
      width: 'device-width',
      initialScale: 1,
      themeColor: 'black',
    });
  });
});
