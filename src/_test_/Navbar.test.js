import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
});

it('renders nav-bar correctly', () => {
  const { getAllByTestId } = render(<Navbar />);
  const result = getAllByTestId('navbar');
  expect(result[0]).toHaveTextContent('Track it');
});

it('renders nav-bar correctly', () => {
  const { getAllByTestId } = render(<Navbar />);
  const result = getAllByTestId('navbar');
  expect(result[0]).not.toHaveTextContent('Track all');
});

it('matches navbar snapshot', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
