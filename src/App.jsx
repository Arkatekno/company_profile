import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Opening,
  Contacts,
  Navbar,
  Projects,
  Skills,
  Testimonials,
  BallCanvas,
  EarthCanvas,
  StarsCanvas,
  ComputersCanvas
} from './components';

// Navbar();

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Opening />
        </div>
        {/*<Projects />*/}
        {/*<Skills />*/}
        {/*<Testimonials />*/}
        {/*<div className="relative z-0">*/}
        {/*  <Contacts />*/}
        {/*  <StarsCanvas />*/}
        {/*</div>*/}
      </div>
    </BrowserRouter>
  );
};

export default App;
