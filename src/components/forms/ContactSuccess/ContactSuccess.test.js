import React from 'react';
import ReactDOM from 'react-dom';
import ContactSuccess from './ContactSuccess';

it('renders the ContactSuccess component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactSuccess />, div);
  ReactDOM.unmountComponentAtNode(div);
});
