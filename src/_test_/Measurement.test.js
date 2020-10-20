import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Measurement from '../components/Measurement';

afterEach(cleanup);
const initialState = {
  authReducer: {
    output: 10,
    error: 'test',
  },
};

const mockStore = configureStore();
let store;

const measurement = {
  date: 'sample date',
};
const index = 1;
const diffVal = ['random content'];

it('renders Measurement correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}>
        <Measurement
          measurement={measurement}
          index={index}
          diffVal={diffVal}
        />
      </Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('appMeasurement');
  expect(result[0]).toHaveTextContent('Invalid Date Hours 0.00 hrs');
});

it('renders Measurement correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}>
        <Measurement
          measurement={measurement}
          index={index}
          diffVal={diffVal}
        />
      </Provider>
    </Router>,
  );
  const result = getAllByTestId('appMeasurement');
  expect(result[0]).not.toHaveTextContent('Some Random Text');
});

it('matches Measurement snapshot', () => {
  const appointment = renderer.create(
    <Router>
      <Provider store={store}>
        <Measurement
          measurement={measurement}
          index={index}
          diffVal={diffVal}
        />
      </Provider>
    </Router>,
  );
  const tree = appointment.toJSON();
  expect(tree).toMatchSnapshot();
});
