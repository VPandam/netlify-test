import './App.css';
import Game from './Pages/Game'
import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/game' component={Game}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
