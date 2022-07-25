import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

import App from "./App";
import { setupStore } from "./store/insdex";
import theme from "./common/theme";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <App />
        </StyledEngineProvider>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
