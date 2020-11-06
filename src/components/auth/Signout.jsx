import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../actions/index';

const Signout = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(signOut());
  };

  return (
    <div data-testid="appSignout">
      <button
        onClick={logOut}
        className="btn btn-secondary"
        type="button"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signout;
