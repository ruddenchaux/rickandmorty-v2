import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CharacterCard from '../../app/characters/card';

function encodeUri(str: string) {
  return encodeURI(str).replace(/\//g, '%2F').replace(/:/g, '%3A');
}

describe('CharacterCard', () => {
  it('should have the media', () => {
    const character = {
      id: '1',
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      location: { name: 'Earth' },
      episode: [{ name: 'Pilot' }],
    };

    render(<CharacterCard character={character} />);

    const image = screen.getByAltText('Rick');

    expect(image).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      expect.stringContaining(
        encodeUri('https://rickandmortyapi.com/api/character/avatar/1.jpeg')
      )
    );
  });

  it('should have the name', () => {
    const character = {
      id: '1',
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      location: { name: 'Earth' },
      episode: [{ name: 'Pilot' }],
    };

    render(<CharacterCard character={character} />);

    const name = screen.getByText('Rick');

    expect(name).toBeInTheDocument();
  });

  it('should have the status and species', () => {
    const character = {
      id: '1',
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      location: { name: 'Earth' },
      episode: [{ name: 'Pilot' }],
    };

    render(<CharacterCard character={character} />);

    const statusAndSpecies = screen.getByText('Alive - Human');

    expect(statusAndSpecies).toBeInTheDocument();
  });

  it.skip('should have the add to favorite action', () => {
    const character = {
      id: '1',
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      location: { name: 'Earth' },
      episode: [{ name: 'Pilot' }],
    };

    render(<CharacterCard character={character} />);

    const button = screen.getByRole('button', { name: 'Add to Favourite' });

    expect(button).toBeInTheDocument();
  });

  it('snapshot', () => {
    const character = {
      id: '1',
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      location: { name: 'Earth' },
      episode: [{ name: 'Pilot' }],
    };

    const { container } = render(<CharacterCard character={character} />);
    expect(container).toMatchSnapshot();
  });
});
