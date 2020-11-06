import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Activities from '../container/Activities';

afterEach(cleanup);
const initialState = {
  activitiesReducer: {
    output: 10,
    error: 'test',
  },
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;
it('renders Activities correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Activities /></Provider>
    </Router>,
  );
  const result = getAllByTestId('appActivities');
  expect(result[0]).toHaveTextContent('test');
});

it('renders Activities correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Activities /></Provider>
    </Router>,
  );
  const result = getAllByTestId('appActivities');
  expect(result[0]).not.toHaveTextContent('Some Random Text');
});
