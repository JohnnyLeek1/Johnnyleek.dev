import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderUsingRouter } from './utils.js';

import App from '../pages/App.js';

test('renders hello text', () => {
  render(<App />);
  const helloText = screen.getByText(/hello, react boilerplate/i);
  expect(helloText).toBeInTheDocument();
});

test('renders 404 text', () => {
  renderUsingRouter(<App />, { route: '/dssfsd-bad-page' });
  const text404 = screen.getByText(/page not found/i);
  expect(text404).toBeInTheDocument();
});
