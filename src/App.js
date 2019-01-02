import React, {Component} from 'react';
import Header from './components/Header/index';
import CustomizedInputBase from './components/searchbar/index'
import {Button, createMuiTheme, MuiThemeProvider}  from '@material-ui/core'
import './App.css';

const theme = createMuiTheme({
  palette : {
    primary : {
      main : "#2196f3"
    },
  },
});

const App = () =>{
  return (
    <MuiThemeProvider theme ={theme}>
    <div className="App">
        {/*<Button variant="contained" color="primary">safiou</Button>*/}
        <Header label="safiou bah" />
        <CustomizedInputBase />
    </div>
    </MuiThemeProvider>
  );
}
/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}*/

export default App;
