'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff9800',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'secondary' && {
            backgroundColor: 'inherit',
            color: '#fff',
          }),
        }),
      },
    },
  },
});

export default theme;
