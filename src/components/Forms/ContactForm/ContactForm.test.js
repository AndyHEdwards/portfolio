import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './ContactForm';

let sendMail = () => '';

it('renders the ContactForm component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactForm sendMail={sendMail} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
