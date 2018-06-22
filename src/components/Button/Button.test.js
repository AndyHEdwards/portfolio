import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

let handleClick = () => '';

it('renders the nav bar', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button handleClick={handleClick} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
