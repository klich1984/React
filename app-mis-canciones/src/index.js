import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Creacion de color primary para nuestra app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#61DAFB"
    }
  }
})

ReactDOM.render(
  <StrictMode>
    {/* Envolvemos la App dentro de  MuiThemeProvider para que envuelva los colores predeterminados*/}
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
