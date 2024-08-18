import { Box } from '@mui/material';
import BottomNavigation from './bottom-navigation';
import Header from './header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Box sx={{ pb: { xs: 7, md: 'inherit' } }} component="main">
        {children}
      </Box>
      <BottomNavigation />
    </>
  );
}
