import {render} from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import card from '../Components/Card';
import App from '../App';

test('Should render the app component', () => {
  render(<App />);
  // const appElement = screen.getAllTestId('x');
  // expect(appElement).toBeInTheDocument();
});
