import React from 'react';
import Menu from './component/Menu';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './component/Home';
import Tutorial from './component/Tutorial';
import Community from './component/Community';
import Profile from './component/Profile';
import ErrorPage from './component/ErrorPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/tutorial" component={Tutorial}/>
        <Route path="/community" component={Community}/>
        <Route path="/users/:profileId" component={Profile}/>
        <Route component={ErrorPage}/>
      </Switch>     
    </BrowserRouter>
  );
}

export default App;
