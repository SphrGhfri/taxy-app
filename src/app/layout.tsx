// app/layout.js - no directives needed
import '@/app/globals.css'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from './theme/themes'
import { Metadata } from 'next';
import { Navbar } from '@/components/NavBar';

export const metadata: Metadata = {
  title: {
    default: 'Next.js App Router',
    template: '%s | Next.js App Router',
  },
  description:
    'A sample project with sidebar',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>

          <body id="__next">
            <Box sx={{ display: 'flex' }}>
              <Navbar />

              <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
              >
                {children}
              </Box>
            </Box>
          </body>

        </CssBaseline>
      </ThemeProvider>
    </html>
  )
}


