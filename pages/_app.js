import "../styles/globals.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const THEME = createMuiTheme({
  palette: {
    text: {
      primary: "#231a4f",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
    h3: {
      fontWeight: 650,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 600,
    },
    body2: {
      fontWeight: "regular",
      lineHeight: "1.5rem",
      letterSpacing: ".02rem",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={THEME}>
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default MyApp;
