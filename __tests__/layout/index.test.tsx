import Layout from '@/app/layout/index';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Layout', () => {
  it('should be rendered with children', () => {
    const { container } = render(
      <Layout>
        <div>Children</div>
      </Layout>
    );

    const children = screen.getByText('Children');

    expect(children).toBeInTheDocument();
  });

  it('should be rendered with header', () => {
    render(
      <Layout>
        <div>Children</div>
      </Layout>
    );

    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
  });

  it('should be rendered with bottom navigation', () => {
    render(
      <Layout>
        <div>Children</div>
      </Layout>
    );

    const bottomNavigation = screen.getAllByRole('navigation').find((nav) => {
      return nav.getAttribute('aria-label') === 'Bottom navigation';
    });

    expect(bottomNavigation).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { container } = render(
      <Layout>
        <div>Children</div>
      </Layout>
    );

    expect(container).toMatchSnapshot();
  });
});
