import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Signup from '../components/auth/Signup';

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

it('renders Signup correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Signup props={props} /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('appSignup');
  expect(result[0]).toHaveTextContent('Sign UptestSubmitAlready have an Account?');
});

it('renders Signup correctly', () => {
  store = mockStore(initialState);
  const { getAllByTestId } = render(
    <Router>
      <Provider store={store}><Signup props={props} /></Provider>
      ,
    </Router>,
  );
  const result = getAllByTestId('appSignup');
  expect(result[0]).not.toHaveTextContent('Some Random Text');
});

it('matches Signup snapshot', () => {
  const appointment = renderer.create(
    <Router>
      <Provider store={store}><Signup props={props} /></Provider>
    </Router>,
  );
  const tree = appointment.toJSON();
  expect(tree).toMatchSnapshot();
});
