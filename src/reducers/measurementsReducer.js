import {
  FETCH_MEASUREMENTS_SUCCESS,
  FETCH_MEASUREMENTS_FAILURE,
} from '../actions/measurementsAction';

const initialState = {
  measurements: [].reverse(),
  error: '',
};

const measurementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEASUREMENTS_SUCCESS:
      return {
        ...state,
        measurements: [...action.payload].reverse(),
        error: '',
      };
    case FETCH_MEASUREMENTS_FAILURE:
      return {
        ...state,
        measurements: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default measurementsReducer;
