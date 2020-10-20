import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CreateActivity from '../components/CreateActivity';

afterEach(cleanup);
const initialState = {
  authReducer: {
    output: 10,
    error: 'test',
  },
};

const mockStore = configureStore();
let store;
const props = {
  history: '/',
};

it('renders CreatActivity correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><CreateActivity props={props} /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('appCreateActivity');
  expect(result[0])
    .toHaveTextContent('You can add a photo to your activityCreateHomeCreate ActivityInformationMore');
});

it('renders CreatActivity correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><CreateActivity props={props} /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('appCreateActivity');
  expect(result[0]).not
    .toHaveTextContent('Some Random Text');
});

it('matches CreatActivity snapshot', () => {
  const appointment = renderer.create(
    <Router>
      <Provider store={store}><CreateActivity props={props} /></Provider>
      ,
    </Router>,
  );
  const tree = appointment.toJSON();
  expect(tree).toMatchSnapshot();
});
