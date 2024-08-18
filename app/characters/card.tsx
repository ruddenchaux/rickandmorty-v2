'use client';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';

type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
  location: { name: string };
  episode: { name: string }[];
};

type CharacterCarpProps = {
  character: Character;
};

export default function CharacterCard({ character }: CharacterCarpProps) {
  return (
    <Card sx={{ maxWidth: 280, flex: 1 }}>
      <CardMedia sx={{ height: 280 }}>
        <Image
          src={character.image}
          alt={character.name}
          width={280}
          height={280}
        />
      </CardMedia>

      <CardContent>
        <Typography variant="h5" component="h2">
          {character.name}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="span">
          {character.status} - {character.species}
        </Typography>
      </CardContent>

      {/* <CardActions>
        <Button size="small" startIcon={<FavoriteBorderIcon />}>
          Add to Favourite
        </Button>
      </CardActions> */}
    </Card>
  );
}
