import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Head from '../../components/Header/Head';
import Body from '../../components/Main/Body';
import Footer from '../../components/Footer/Footer';
ReactDOM.createRoot(document.querySelector("#head")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Head />
    </StyledEngineProvider>
  </React.StrictMode>
);
ReactDOM.createRoot(document.querySelector("#main")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Body />
    </StyledEngineProvider>
  </React.StrictMode>
);
ReactDOM.createRoot(document.querySelector("#footer")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Footer />
    </StyledEngineProvider>
  </React.StrictMode>
);