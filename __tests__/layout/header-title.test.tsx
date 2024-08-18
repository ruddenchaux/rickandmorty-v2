import HeaderTitle from '@/app/layout/heder-title';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockReturnValueOnce('/').mockReturnValueOnce('/path2'),
}));

jest.mock('../../app/layout/items-menu', () => ({
  itemsMenu: [
    { to: '/', label: 'Title 1' },
    { to: '/path2', label: 'Title 2' },
  ],
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe('HeaderTitle', () => {
  it.each(['Title 1', 'Title 2'])(
    'should be rendered the title based on the pathname',
    (expectedTitle) => {
      const { container } = render(<HeaderTitle />);

      const title = screen.getByRole('heading', {
        name: `Rick and Morty - ${expectedTitle}`,
      });

      expect(title).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    }
  );
});
