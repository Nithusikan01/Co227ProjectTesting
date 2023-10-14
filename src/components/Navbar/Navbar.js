import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Home from './Home';
import About from './About';
import Online from './Online';
import Offline from './Offline';
import Contact from './Contact';

import Navbarmenu from './menu/Navbarmenu';

function Navbar() {
  return (
    <div>
      <Router basename="/">
        <Navbarmenu />
        
        <Routes> 
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Online" component={Online}/>
          <Route path="/Offline" component={Offline}/>
          <Route path="/Contact" component={Contact}/> 
        </Routes>
      </Router>

    </div>
  );
}

export default Navbar;
