/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Measurement from '../components/Measurement';
import { fetchMeasurements } from '../actions/measurementsAction';
import Footer from '../components/Footer';

const Measurements = props => {
  const activityId = props.location.state;
  const { actTitle } = props.location;
  const dispatch = useDispatch();
  const timeDifference = [];
  const diffVal = [];

  useEffect(() => {
    dispatch(fetchMeasurements(activityId));
  }, [activityId, dispatch]);

  const measurements = useSelector(state => state.measurementsReducer.measurements);

  for (let i = 0; i < measurements.length; i++) {
    timeDifference.push(parseFloat(measurements[i].duration));
    if (timeDifference.length === 1) {
      diffVal.push(timeDifference[0]);
    } else if (timeDifference.length > 1) {
      diffVal.push(
        timeDifference[timeDifference.length - 2] - timeDifference[timeDifference.length - 1],
      );
    }
  }

  return (
    <div data-testid="appMeasurements">
      <div className="measurement-top">
        <button className="btn btn-primary mt-2 ml-2 ">
          <Link
            className="text-white"
            to={{
              pathname: `/activity/${activityId}/create`,
              state: activityId,
              actTitle,
            }}
          >
            +
          </Link>
        </button>
      </div>
      <div>
        {
                    measurements.map((measurement, index) => (
                      <Measurement
                        key={index}
                        index={index}
                        measurement={measurement}
                        diffVal={diffVal}
                      />
                    ))
                }
      </div>
      <Footer />
    </div>
  );
};

export default Measurements;
