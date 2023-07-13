// app/layout.js - no directives needed
import '@/app/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from './theme/themes'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
          <body id="__next">{children}</body>
        </CssBaseline>
      </ThemeProvider>
    </html>
  )
}


