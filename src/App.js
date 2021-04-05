import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from './components/pages/Gallery';
import Story from './components/pages/Story';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/gallery' exact component={Gallery} />
      <Route path='/story' exact component={Story} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
