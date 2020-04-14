import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from './Components/User';
import UserDetail from './Components/UserDetail';

const App = () => {

  return (
      
      <Router>
        <Route path="/userdetail/:login/" component={UserDetail} />
        <Route path="/" exact component={User} />
      </Router>
  );
}
export default App;
