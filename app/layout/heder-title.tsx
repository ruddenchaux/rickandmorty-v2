'use client';
import { Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import { itemsMenu } from './items-menu';

export default function HeaderTitle() {
  const pathname = usePathname();
  const headerTitle = itemsMenu.find((item) => item.to === pathname)?.label;

  return (
    <Typography
      sx={{
        flexGrow: 1,
        ml: 3,
        bgcolor: 'inherit',
        fontSize: { md: '1.8rem', xs: '1.2rem' },
        color: 'text.primary',
      }}
      component="h1"
    >
      Rick and Morty - {headerTitle}
    </Typography>
  );
}
