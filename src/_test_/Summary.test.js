import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Summary from '../components/Summary';

afterEach(cleanup);
const initialState = {
  authReducer: {
    output: 10,
    error: 'test',
  },
};

const mockStore = configureStore();
let store;

const activities = [
  { total: 12 },
];

it('renders Summary correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Summary activities={activities} /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('appSummary');
  expect(result[0]).toHaveTextContent('%');
});

it('renders Summary correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Summary activities={activities} /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('appSummary');
  expect(result[0]).not.toHaveTextContent('Some Random text');
});

it('matches Summary snapshot', () => {
  const appointment = renderer.create(
    <Router>
      <Provider store={store}><Summary activities={activities} /></Provider>
    </Router>,
  );
  const tree = appointment.toJSON();
  expect(tree).toMatchSnapshot();
});
