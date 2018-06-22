import React from 'react';
import ReactDOM from 'react-dom';
import Services from './Services';

it('renders the Services component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Services />, div);
  ReactDOM.unmountComponentAtNode(div);
});
