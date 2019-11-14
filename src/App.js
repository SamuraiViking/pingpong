import React from 'react';
import './css/tailwind.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login'

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
