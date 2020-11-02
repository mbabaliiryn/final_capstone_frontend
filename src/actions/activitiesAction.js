/* eslint-disable no-unused-vars */
import axios from 'axios';

export const FETCH_ACTIVITIES_REQUEST = 'FETCH_ACTIVITIES_REQUEST';
export const FETCH_ACTIVITIES_SUCCESS = 'FETCH_ACTIVITIES_SUCCESS';
export const FETCH_ACTIVITIES_FAILURE = 'FETCH_ACTIVITIES_FAILURE';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';

const URL = 'https://activities-tracker.herokuapp.com/activities';

export const fetchActivitiesSuccess = activities => ({
  type: FETCH_ACTIVITIES_SUCCESS,
  payload: activities,
});

export const fetchActivitiesRequest = () => ({
  type: FETCH_ACTIVITIES_REQUEST,
});

export const fetchActivitiesFailure = error => ({
  type: FETCH_ACTIVITIES_FAILURE,
  payload: error,
});

export const deleteActivity = id => {
  axios.delete(`${URL}/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.user}` },
  });
  return {
    type: DELETE_ACTIVITY,
    payload: id,
  };
};

export const fetchActivities = () => dispatch => {
  axios.get(
    URL,
    { headers: { Authorization: `Bearer ${localStorage.user}` } },
  ).then(response => {
    const activities = response.data;
    dispatch(fetchActivitiesSuccess(activities));
  }).catch(error => {
    const errMsg = error;
    dispatch(fetchActivitiesFailure(errMsg));
  });
};

export const createActivity = (form, history) => async dispatch => {
  history.push('/activities');
  dispatch(fetchActivitiesRequest());
  await axios.post(URL, form, {
    headers: { Authorization: `Bearer ${localStorage.user}` },
  }).then(response => {
    dispatch(fetchActivities());
  }).catch(error => {
    dispatch(fetchActivitiesFailure(error));
  });
};
