import "../styles/globals.css"
import type { AppProps } from "next/app"
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles"


const theme = createTheme({
  palette: {
    primary: {
      light: "#81c784",
      main: "#43a047",
      dark: "#2e7d32",
      contrastText: "#fff",
    },
    secondary: {
      light: "#aed581",
      main: "#7cb342",
      dark: "#33691e",
      contrastText: "#000",
    },
  },
});


function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} theme={theme} />
  </ThemeProvider>
}

export default MyApp
