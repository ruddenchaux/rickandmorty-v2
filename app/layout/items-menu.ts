import Face from '@mui/icons-material/Face';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FilterHdr from '@mui/icons-material/FilterHdr';
import Movie from '@mui/icons-material/Movie';
import { SvgIcon } from '@mui/material';

export type ItemMenu = {
  label: string;
  icon: typeof SvgIcon;
  to: string;
};

export const itemsMenu: ItemMenu[] = [
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
];
