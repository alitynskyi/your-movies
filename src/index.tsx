import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App";
import { setupStore } from "./store";
import theme from "./common/theme";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <CssBaseline />
            <App />
          </StyledEngineProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
);
