import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Signout from '../components/auth/Signout';

afterEach(cleanup);
afterEach(cleanup);
const initialState = {
  authReducer: {
    output: 10,
    error: 'test',
  },
};
const mockStore = configureStore();
let store;

it('renders Signout correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Signout /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('appSignout');
  expect(result[0]).toHaveTextContent('Sign Out');
});

it('renders Signout correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Signout /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('appSignout');
  expect(result[0]).not.toHaveTextContent('Some Random');
});

it('matches Signout snapshot', () => {
  const appointment = renderer.create(
    <Router>
      <Provider store={store}><Signout /></Provider>
    </Router>,
  );
  const tree = appointment.toJSON();
  expect(tree).toMatchSnapshot();
});
