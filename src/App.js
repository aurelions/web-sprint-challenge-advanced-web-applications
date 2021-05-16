import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  
   const logoutFunc = localStorage.removeItem('token');

  return (
    <Router>
      <div className="App">
        <header>
          Bubbles
          <a onClick={logoutFunc} data-testid="logoutButton" href='/'>logout</a>
        </header> 
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
        <PrivateRoute exact path='/protected' component={BubblePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;