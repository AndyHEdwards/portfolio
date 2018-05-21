import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
