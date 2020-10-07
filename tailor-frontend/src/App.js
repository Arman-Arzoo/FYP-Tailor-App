import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={LogIn}></Route>
          <Route path="/signup" exact component={SignUp}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
