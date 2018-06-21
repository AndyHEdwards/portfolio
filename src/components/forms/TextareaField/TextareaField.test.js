import React from 'react';
import ReactDOM from 'react-dom';
import TextareaField from './TextareaField';

const handleInputChange = () => '';

it('renders the TextareaField component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextareaField handleInputChange={handleInputChange} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
