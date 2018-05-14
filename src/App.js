import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Services/>
    </div>
  );
};

export default App;
