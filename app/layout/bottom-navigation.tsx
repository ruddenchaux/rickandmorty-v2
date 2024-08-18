'use client';
import {
  BottomNavigationAction,
  BottomNavigation as MuiBottomNavigation,
} from '@mui/material';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { itemsMenu } from './items-menu';

export default function BottomNavigation() {
  const pathname = usePathname();
  const [value, setValue] = useState(pathname);

  return (
    <MuiBottomNavigation
      role="navigation"
      aria-label="Bottom navigation"
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        mt: 2,
      }}
      value={value}
      onChange={(event, to) => {
        setValue(to);
      }}
      showLabels
    >
      {itemsMenu.map((item) => (
        <BottomNavigationAction
          key={item.label}
          label={item.label}
          value={item.to}
          href={item.to}
          icon={<item.icon />}
          LinkComponent={NextLink}
        />
      ))}
    </MuiBottomNavigation>
  );
}
