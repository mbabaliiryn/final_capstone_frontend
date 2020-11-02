/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createActivity } from '../actions/activitiesAction';

import Footer from './Footer';

const CreateActivity = ({ history }) => {
  const [title, setTitle] = useState('');
  const [total, setTotal] = useState('');
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const submitAcvtivty = event => {
    const form = new FormData();
    form.append('title', title);
    form.append('total', total);
    form.append('avatar', image);
    dispatch(createActivity(form, history));
    event.preventDefault();
  };

  return (
    <>
      <div data-testid="appCreateActivity" className="create-activity">
        <div className=" col-md-3 p-3  bg-secondary">
          <h3>Create Activity</h3>
          <form onSubmit={submitAcvtivty}>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="form-control mb-2"
            />
            <br />
            <input
              type="number"
              placeholder="Enter Total"
              value={total}
              onChange={e => setTotal(e.target.value)}
              className="form-control"
            />
            <br />
            <input
              type="file"
              onChange={e => setImage(e.target.files[0])}
            />
            <br />
            <button type="submit" className="btn btn-success mt-1">
              Create
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

CreateActivity.propTypes = {
  history: PropTypes.object,
};

export default CreateActivity;
