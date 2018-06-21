import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import ReactGA from 'react-ga';
if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Services/>
      <Work/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
