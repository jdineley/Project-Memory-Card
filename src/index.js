// https://dev.to/aromanarguello/how-to-use-themes-in-styled-components-49h

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './theme/GlobalStyle'
import Theme from './theme/Theme'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

