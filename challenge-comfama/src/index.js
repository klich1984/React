import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff2777"
    }
  }
})

ReactDOM.render(
  <StrictMode>
    {/* The app is wrapped in the created styles and passed as a property */}
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
