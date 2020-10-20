import { combineReducers } from 'redux';
import authReducer from './authReducer';
import activitiesReducer from './activitiesReducer';
import measurementsReducer from './measurementsReducer';

const rootReducer = combineReducers({
  authReducer,
  activitiesReducer,
  measurementsReducer,
});

export default rootReducer;
