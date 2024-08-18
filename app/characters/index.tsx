import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Metadata } from 'next';
import CharacterCard from './card';

export const metadata: Metadata = {
  title: 'Rick and Morty Characters',
};

type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
  location: { name: string };
  episode: { name: string }[];
};

type CharactersApiResponse = {
  info: { count: number; pages: number; next: string; prev: string };
  results: Character[];
};

async function getCharacters(page: number = 1): Promise<Character[]> {
  const characters = [];
  let nextPageEndpoint = `https://rickandmortyapi.com/api/character?page=${page}`;

  while (nextPageEndpoint) {
    const response = await fetch(nextPageEndpoint, { cache: 'force-cache' });
    const json: CharactersApiResponse = await response.json();

    characters.push(...json.results);
    // nextPageEndpoint = json.info.next;
    nextPageEndpoint = '';
  }

  return characters;
}

export default async function Characters() {
  const characters = await getCharacters();

  return (
    <Box sx={{ flexGrow: 1, pt: 2, pb: 2 }}>
      <Grid container rowSpacing={4}>
        {characters.map((character) => (
          <Grid
            key={character.id}
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={3}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
