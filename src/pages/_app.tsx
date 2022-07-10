import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Head from 'next/head'
import Script from 'next/script'
import GlobalStyle from '../styles/globalstyles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#81c784',
      main: '#43a047',
      dark: '#2e7d32',
      contrastText: '#fff',
    },
    secondary: {
      light: '#aed581',
      main: '#7cb342',
      dark: '#33691e',
      contrastText: '#000',
    },
  },
});


function App({ Component, pageProps }: AppProps) {
  const semanticUI = 'https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/semantic.min.css'
  return <ThemeProvider theme={theme}>
    <Script id='jquery' src="scripts/jquery.min.js" />
    <Script id='semantic' src="scripts/semantic.min.js" />
    <GlobalStyle />
    <Head>
      <title>Auto4Doc</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" type="text/css" href={semanticUI} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default App
