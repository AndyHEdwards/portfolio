import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm';

it('renders the ContactForm component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
