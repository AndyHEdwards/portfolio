import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Work from './components/Work/Work';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Services/>
      <Work/>
    </div>
  );
};

export default App;
