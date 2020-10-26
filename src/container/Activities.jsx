/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Activity from '../components/Activity';
import { fetchActivities } from '../actions/activitiesAction';
import Summary from '../components/Summary';
import Footer from '../components/Footer';

const Activities = () => {
  const activitiesReducer = useSelector(state => state.activitiesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  const todaysDate = new Date();
  const result = todaysDate.toUTCString().split(' ');
  result.splice(4, 2);
  const finalValue = result.join(' ');

  return activitiesReducer.loading ? (
    <div data-testid="appActivities" className="mt-4">
      {' '}
      <h1> Loading....</h1>
      {' '}
    </div>
  )
    : activitiesReducer.data ? (
      <div data-testid="appActivities">
        {' '}
        { activitiesReducer.data }
        {' '}
      </div>
    )
      : (
        <div data-testid="appActivities" className="home-section">
          <div className="d-flex justify-content-center align-items-center pt-2">{ finalValue }</div>
          <div className="w-100">
            <Summary activities={activitiesReducer.activities} />
          </div>
          <div className="row col-sm-12 m-1 activities-main">
            {
                activitiesReducer.activities.map((activity, key) => (
                  <Activity activity={activity} key={key} />
                ))
                }
          </div>
          <Footer />
        </div>
      );
};

export default Activities;
