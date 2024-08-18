import { itemsMenu } from '@/app/layout/items-menu';
import Face from '@mui/icons-material/Face';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FilterHdr from '@mui/icons-material/FilterHdr';
import Movie from '@mui/icons-material/Movie';

describe('items-menu', () => {
  it('should contains all the links data', () => {
    expect(itemsMenu).toEqual([
      {
        label: 'Characters',
        icon: Face,
        to: '/',
      },
      {
        label: 'Locations',
        icon: FilterHdr,
        to: '/locations',
      },
      {
        label: 'Episodes',
        icon: Movie,
        to: '/episodes',
      },
      {
        label: 'Favorites',
        icon: FavoriteBorder,
        to: '/favorites',
      },
    ]);
  });
});
