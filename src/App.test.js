import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';

it('renders the nav bar and Hero without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.render(<Hero />, div);
  ReactDOM.unmountComponentAtNode(div);
});
