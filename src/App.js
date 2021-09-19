import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles.scss';

import Home from './templates/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route render={Home} path='/' exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
