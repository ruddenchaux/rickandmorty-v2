import Characters, { metadata } from '@/app/characters';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Characters', () => {
  it('should be rendered', async () => {
    const charactersResponse = {
      results: [
        {
          id: '1',
          name: 'Rick',
          status: 'Alive',
          species: 'Human',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          location: { name: 'Earth' },
          episode: [{ name: 'Pilot' }],
        },
        {
          id: '2',
          name: 'Morty',
          status: 'Alive',
          species: 'Human',
          image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
          location: { name: 'Earth' },
          episode: [{ name: 'Pilot' }],
        },
      ],
    };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(charactersResponse),
    });

    const { container } = render(await Characters());

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(
      'https://rickandmortyapi.com/api/character?page=1',
      { cache: 'force-cache' }
    );
    expect(screen.getByText('Rick')).toBeInTheDocument();
    expect(screen.getByText('Morty')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should be metadated', () => {
    expect(metadata).toEqual({
      title: 'Rick and Morty Characters',
    });
  });
});
