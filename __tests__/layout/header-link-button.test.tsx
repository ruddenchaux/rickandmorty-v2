import HeaderLinkButton from '@/app/layout/header-link-button';
import Face from '@mui/icons-material/Face';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('HeaderLink', () => {
  it('should be rendered based on the pathname', () => {
    const item = {
      label: 'Characters',
      icon: Face,
      to: '/',
    };
    const { container } = render(<HeaderLinkButton item={item} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toContainHTML('Characters');
    expect(button).toContainHTML('<svg');
    expect(button).toContainHTML('data-testid="FaceIcon"');

    expect(container).toMatchSnapshot();
  });
});
