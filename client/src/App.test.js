import React from 'react';
import * as rtl from "@testing-library/react"
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders "soccer searches" text', () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.getByText(/soccer searches/i));
});
