import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from './layout/index';
import theme from './theme';

export const metadata: Metadata = {
  description: 'Discover the Rick and Morty world',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>{children}</Layout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
