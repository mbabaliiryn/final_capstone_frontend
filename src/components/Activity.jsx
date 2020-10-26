/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteActivity } from '../actions/activitiesAction';

const Activity = ({ activity }) => {
  const dispatch = useDispatch();

  const deleteAct = id => {
    dispatch(deleteActivity(id));
  };

  return (
    <>
      <div data-testid="appActivity" className="main-section d-flex p-1 bg-white">
        <div className="w-50 image-section p-3">
          <img src={activity.avatar.url} alt="boohoo" className="image-det" />
        </div>
        <div className="activity-body ml-1">
          <div>
            <div className="activity-title">
              { activity.title.length < 15 ? `${activity.title}`
                : `${activity.title.substring(0, 20)}...` }
            </div>
          </div>
          <div className="activity-text d-flex">
            <div className="activity-inner">
              { activity.total }
            </div>
            <div>
              <small>Hrs</small>
            </div>
          </div>
          <div className="lower-section">
            <Link
              className="links-info"
              to={{
                pathname: `/activity/${activity.id}/measurements`,
                state: activity,
              }}
            >
              Details
            </Link>
            <i className="far fa-trash-alt ml-4 trash-section" onClick={() => deleteAct(activity.id)} />
          </div>
        </div>
      </div>
    </>
  );
};

Activity.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.objectOf(PropTypes.string),
    title: PropTypes.string,
    total: PropTypes.string,
  }).isRequired,
};

export default Activity;
