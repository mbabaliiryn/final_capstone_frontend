import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CreateMeasurement from '../components/CreateMeasurement';

afterEach(cleanup);
const initialState = {
  authReducer: {
    output: 10,
    error: 'test',
  },
};

const mockStore = configureStore();
let store;

const location = {
  state: 'sample',
};

it('renders CreateMeasurement correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><CreateMeasurement location={location} /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('appCreateMeasurement');
  expect(result[0])
    .toHaveTextContent('Measure 00:00:00:00StartStopHomeCreate ActivityInformationMore');
});

it('renders CreateMeasurement correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><CreateMeasurement location={location} /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('appCreateMeasurement');
  expect(result[0]).not
    .toHaveTextContent('Some Random Text');
});

it('matches CreateMeasurement snapshot', () => {
  const appointment = renderer.create(
    <Router>
      <Provider store={store}><CreateMeasurement location={location} /></Provider>
      ,
    </Router>,
  );
  const tree = appointment.toJSON();
  expect(tree).toMatchSnapshot();
});
