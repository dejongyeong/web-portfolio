import React from 'react';
import Hero from './Hero';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontWeight: '800',
    },
    body1: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: '300',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 425,
      lg: 768,
      xl: 1024,
      xxl: 1440,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Hero />
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
