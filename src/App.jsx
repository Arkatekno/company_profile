import React from 'react';
import Testimonials from './components/Testimonials.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx';

const App = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contacts />
    </main>
  );
};

export default App;
