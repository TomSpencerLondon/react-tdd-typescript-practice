import React from 'react';
import { render, screen } from '@testing-library/react';
import MyApp from './MyApp';

test('renders learn react link', () => {
  render(<MyApp />);
  const linkElement = screen.getByText(/Hello React/i);
  expect(linkElement).toBeInTheDocument();

  const actual = 1;
  const expected = 1;

  expect(actual).toEqual(expected);
});
