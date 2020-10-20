import {
  FETCH_ACTIVITIES_SUCCESS,
  FETCH_ACTIVITIES_FAILURE,
  DELETE_ACTIVITY,
  FETCH_ACTIVITIES_REQUEST,
} from '../actions/activitiesAction';

const initialState = {
  activities: [],
  error: '',
  loading: false,
};

const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVITIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.payload,
        error: '',
        loading: false,
      };
    case FETCH_ACTIVITIES_FAILURE:
      return {
        ...state,
        activities: [],
        error: action.payload,
        loading: false,

      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(data => data.id !== action.payload),
        error: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default activitiesReducer;
