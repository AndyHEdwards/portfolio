import React from 'react';
import ReactDOM from 'react-dom';
import Work from './Work';

it('renders the Work component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Work />, div);
  ReactDOM.unmountComponentAtNode(div);
});
