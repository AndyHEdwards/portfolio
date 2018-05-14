import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';

it('renders the nav bar', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
