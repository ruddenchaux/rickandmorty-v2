import { AppBar, Box, Link, Toolbar } from '@mui/material';
import NextLink from 'next/link';
import HeaderLinkButton from './header-link-button';
import HeaderTitle from './heder-title';
import { itemsMenu } from './items-menu';
import Logo from './logo';

export default function Header() {
  return (
    <AppBar sx={{ bgcolor: 'background.paper' }} position="sticky">
      <Toolbar>
        <Link
          href="/"
          aria-label="Rick and Morty"
          component={NextLink}
          sx={{ display: 'flex' }}
        >
          <Logo />
        </Link>

        <HeaderTitle />

        <Box
          sx={{ display: { xs: 'none', md: 'flex' } }}
          component="nav"
          aria-label="Header navigation"
        >
          {itemsMenu.map((item) => (
            <Link
              component={NextLink}
              key={item.to}
              href={item.to}
              aria-label={item.label}
            >
              <HeaderLinkButton item={item} />
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
