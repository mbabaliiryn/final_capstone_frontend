import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Information from '../components/Information';

afterEach(cleanup);
const initialState = {
  authReducer: {
    output: 10,
    error: 'test',
  },
};

const mockStore = configureStore();
let store;

it('renders Information correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Information /></Provider>
    </Router>,
  );
  const result = getAllByTestId('appInformation');
  expect(result[0])
    .toHaveTextContent('HomeCreate ActivityInformationMore');
});

it('renders Information correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Information /></Provider>
    </Router>,
  );
  const result = getAllByTestId('appInformation');
  expect(result[0]).not
    .toHaveTextContent('Some Random Text');
});

it('matches Information snapshot', () => {
  const appointment = renderer.create(
    <Router>
      <Provider store={store}><Information /></Provider>
    </Router>,
  );
  const tree = appointment.toJSON();
  expect(tree).toMatchSnapshot();
});
