import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Measurements from '../container/Measurements';

afterEach(cleanup);
const initialState = {
  measurementsReducer: {
    measurements: [{
      date: 'December 17, 1995 03:24:00',
      duration: '12',
    }],
    error: 'test',
  },
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let store;

const location = {
  state: {
    id: 1,
  },
};

it('renders Measurements correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Measurements location={location} /></Provider>
    </Router>,
  );
  const result = getAllByTestId('appMeasurements');
  expect(result[0])
    .toHaveTextContent('Sun, 17 Dec 1995 00:24:00 GMT12 Hours 0.00 hrsHomeCreate ActivityInformationMore');
});

it('renders Measurements correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Measurements location={location} /></Provider>
    </Router>,
  );
  const result = getAllByTestId('appMeasurements');
  expect(result[0]).not
    .toHaveTextContent('Some random stuff');
});
