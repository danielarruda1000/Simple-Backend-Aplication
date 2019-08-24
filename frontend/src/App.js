import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'

function App() {
  return (
    <div>
      <Switch>
        
        <Route exact path="/" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/forgotpassword" component={ForgotPassword}/>
      </Switch>
    </div>
  );
}

export default App;
