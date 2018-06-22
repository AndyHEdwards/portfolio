import React from 'react';
import ReactDOM from 'react-dom';
import ModalContent from './ModalContent';

it('renders the nav bar', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalContent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
