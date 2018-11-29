import React, { Component } from 'react';
import './App.css';
import Background from './containers/MainPage/background';
import SearchPage from './containers/SearchPage/searchPage';
import DatabasePage from './containers/DatabasePage/databasepage';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Background} />
          <Route path="/discover" component={SearchPage} />
          <Route path="/database" component={DatabasePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
