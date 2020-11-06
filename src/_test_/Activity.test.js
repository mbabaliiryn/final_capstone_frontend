import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Activity from '../components/Activity';

afterEach(cleanup);
const initialState = {
  authReducer: {
    output: 10,
    error: 'test',
  },
};

const mockStore = configureStore();
let store;

const activity = {
  title: 'test title',
  total: 'test total',
  avatar: {
    url: 'sample',
  },
};

it('renders Activity correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Activity activity={activity} /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('appActivity');
  expect(result[0]).toHaveTextContent('test titletest totalHrsDetails');
});

it('renders Activity correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Activity activity={activity} /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('appActivity');
  expect(result[0]).not.toHaveTextContent('some random text');
});

it('matches Activity snapshot', () => {
  const appointment = renderer.create(
    <Router>
      <Provider store={store}><Activity activity={activity} /></Provider>
      ,
    </Router>,
  );
  const tree = appointment.toJSON();
  expect(tree).toMatchSnapshot();
});
