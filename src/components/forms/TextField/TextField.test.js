import React from 'react';
import ReactDOM from 'react-dom';
import TextField from './TextField';

const handleInputChange = () => '';

it('renders the TextField component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextField handleInputChange={handleInputChange} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
