import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {

  //with render() we are creating a virtual dom 
  render(<App />);

  //with screen here we are looking for an element with the text learn react
  const linkElement = screen.getByText(/learn react/i);

  //with jest expect() method we are looking if the link element is in the document with the matcher function 
  expect(linkElement).toBeInTheDocument();
});
