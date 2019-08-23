import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <div>
      <Switch>
        
        <Route exact path="/" component={Login}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </div>
  );
}

export default App;
