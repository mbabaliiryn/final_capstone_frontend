/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
import {
  fetchActivitiesSuccess,
  fetchActivitiesFailure,
  deleteActivityRequest,
  DELETE_ACTIVITY,
  FETCH_ACTIVITIES_FAILURE,
  FETCH_ACTIVITIES_SUCCESS,
} from '../../actions/activitiesAction';

describe('activities', () => {
  it('should fetch a list activities', () => {
    const activities = [
      { title: 'test', duration: 'sample date', avatar: 'sample/url' },
      { title: 'test two', duration: 'sample date', avatar: 'trial/url' },
    ];

    const expectedAction = {
      type: FETCH_ACTIVITIES_SUCCESS,
      payload: activities,
    };
    expect(fetchActivitiesSuccess(activities)).toEqual(expectedAction);
    expect(fetchActivitiesSuccess(activities)).not.toEqual('some random arrays');
  });

  it('fail to fetch activities lists', () => {
    const error = 'failed to load activities';

    const expectedAction = {
      type: FETCH_ACTIVITIES_FAILURE,
      payload: error,
    };
    expect(fetchActivitiesFailure(error)).toEqual(expectedAction);
    expect(fetchActivitiesFailure(error)).not.toEqual('some random string');
  });
});
