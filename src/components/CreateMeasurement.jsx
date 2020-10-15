import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createMeasurement } from '../actions/measurementsAction';
import Footer from './Footer';

const CreateMeasurement = ({ location }) => {
  const activity = location.state;
  const dispatch = useDispatch();
  const [watch, setWatch] = useState('00:00:00:00');
  const [timer, setTimer] = useState(false);
  let millisecond = 0;
  let second = 0;
  let minute = 0;
  let hour = 0;

  const run = () => {
    setWatch(`${hour < 10 ? `0${hour}` : hour}:
                    ${minute < 10 ? `0${minute}` : minute}:
                    ${second < 10 ? `0${second}` : second}:
                    ${millisecond < 10 ? `0${millisecond}` : millisecond}`);
    millisecond += 1;
    if (millisecond === 100) {
      millisecond = 0;
      second += 1;
    }
    if (second === 60) {
      second = 0;
      minute += 1;
    }
    if (minute === 60) {
      minute = 0;
      hour += 1;
    }
  };

  const startWatch = () => {
    if (!timer) {
      setTimer(setInterval(run, 10));
    }
  };

  const stopWatch = () => {
    clearInterval(timer);
    setTimer(false);

    const duration = (parseInt(watch.toString().split(':')[0].trim())
        + (parseInt(watch.toString().split(':')[1].trim()) / 60)
        + (parseInt(watch.toString().split(':')[2].trim()) / 3600)).toFixed(2);
    const date = new Date();
    dispatch(createMeasurement({ duration, date }, activity.id));
  };
  return (
    <div data-testid="appCreateMeasurement" className="measure-section">
      <div className="activity-header">
        <p style={{
          color: 'grey',
        }}
        >
          Measure
          {' '}
          { activity.title }
        </p>
      </div>
      <div className="mx-auto mt-4 clock-border">
        <div className="h1 d-flex justify-content-center">
          <p>{ watch }</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4 bg-white p-2 lower-section-button">
        <button type="button" onClick={startWatch} className="start-watch mr-1">Start</button>
        <button type="button" onClick={stopWatch} className="stop-watch mr-1">
          <Link
            className="text-white"
            to={{
              pathname: `/activity/${activity.id}/measurements`,
              state: activity,
            }}
          >
            Stop
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

CreateMeasurement.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }).isRequired,
};

export default CreateMeasurement;