import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Button from '../components/Button';

afterEach(cleanup);
const initialState = {
  authReducer: {
    output: 10,
    error: 'test',
  },
};

const detail = {
  path: '/test-path',
  className: 'sample color',
  name: 'test name',
};

const mockStore = configureStore();
let store;

it('renders Button correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Button detail={detail} /></Provider>
    </Router>,
  );
  const result = getAllByTestId('appButton');
  expect(result[0]).toHaveTextContent('test name');
});

it('renders Button correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Button detail={detail} /></Provider>
    </Router>,
  );
  const result = getAllByTestId('appButton');
  expect(result[0]).not.toHaveTextContent('some random text');
});

it('matches Button snapshot', () => {
  const appointment = renderer.create(
    <Router>
      <Provider store={store}><Button detail={detail} /></Provider>
      ,
    </Router>,
  );
  const tree = appointment.toJSON();
  expect(tree).toMatchSnapshot();
});
