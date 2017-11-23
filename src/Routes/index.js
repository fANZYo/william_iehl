import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </Router>
  )
};

export default Routes;