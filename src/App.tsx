import { Provider } from "react-redux";
import "./App.css";
import { RouterApp } from "./router";
import store from "./store";
import { lightTheme,themeObject as theme } from "./theme";
import { useMemo } from "react";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material";

function App() {
  const muiTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        palette: {
          ...(lightTheme?.palette ?? {}),
        },
      } as unknown as ThemeOptions),
    []
  );

  return (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <RouterApp />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
