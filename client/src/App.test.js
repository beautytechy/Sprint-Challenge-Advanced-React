import React from 'react';
import * as rtl from "@testing-library/react"
import ReactDOM from 'react-dom';
import App from './App';
import PlayerCard from "./components/PlayerCard";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders "soccer searches" text', () => {
  const h1 = rtl.render(<App />);
  expect(h1.getByText(/soccer searches/i));
});

it('renders player data', () => {
  const div = rtl.render(<PlayerCard />);
  expect(div.getByTestId("playerData"));
});
