import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Opening,
  Contacts,
  Navbar,
  Projects,
  Services,
  Skills,
  Testimonials,
  BallCanvas,
  EarthCanvas,
  StarsCanvas,
  ComputersCanvas,
  Tech,
  Works,
  Timeline
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
        <Services />
        <Timeline />
        <Tech />
        <Works />
      </div>
    </BrowserRouter>
  );
};

export default App;
