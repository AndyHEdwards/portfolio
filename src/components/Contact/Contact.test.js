import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';

it('renders the Contact component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contact />, div);
  ReactDOM.unmountComponentAtNode(div);
});
