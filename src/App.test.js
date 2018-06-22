import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Work from './components/Work/Work';

it('renders the nav bar and Hero without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.render(<Hero />, div);
  ReactDOM.render(<Work />, div);
  ReactDOM.unmountComponentAtNode(div);
});
