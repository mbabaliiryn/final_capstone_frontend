/* eslint-disable radix */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Measurement = ({ measurement, index, diffVal }) => {
  const date = new Date(measurement.date);
  const res = date.toUTCString();
  const today = new Date();
  let resToday;
  const arrayDummy = [];

  const dayToday = today.toUTCString().split(' ')[0];
  const dayDate = date.toUTCString().split(' ')[0];

  const dateToday = parseInt(today.toUTCString().split(' ')[1]);
  const dateDate = parseInt(date.toUTCString().split(' ')[1]);

  const monthToday = today.toUTCString().split(' ')[2];
  const monthDay = date.toUTCString().split(' ')[2];

  if (dayToday === dayDate
        && dateToday === dateDate
        && monthToday === monthDay
  ) {
    const test = res.split(' ');
    test.splice(0, 1);
    test.unshift('Today, ');
    test.splice(4, 2);
    resToday = test.join(' ');
  } else if (
    parseInt(dateDate) === (parseInt(dateToday) - 1)
            && monthToday === monthDay
  ) {
    const test = res.split(' ');
    test.splice(0, 1);
    test.unshift('Yesterday, ');
    test.splice(4, 2);
    resToday = test.join(' ');
  } else {
    resToday = res;
  }

  const title = resToday.split(' ')[0];
  arrayDummy.push(parseFloat(measurement.duration));

  let errorValue;

  if (diffVal[index + 1]) {
    errorValue = parseFloat(diffVal[index + 1]).toFixed(3);
  } else {
    errorValue = parseFloat('0.00').toFixed(2);
  }

  let positive;
  if (errorValue <= 0) {
    positive = (
      <div className="progess">
        <div
          className="display-positive"
          style={{
            borderRight: '5px solid #94E28E',
            borderBottom: '5px solid #94E28E',
          }}
        />
      </div>
    );
  } else {
    positive = (
      <div className="progess">
        <div
          className="display-negative"
          style={{
            borderRight: '5px solid #F24429',
            borderBottom: '5px solid #F24429',
          }}
        />
      </div>
    );
  }
  return (
    <div>
      <div
        className="col-md-4p-1 py-1 pl-2"
        style={{
          backgroundColor: '#F3F4F6',
          color: 'grey',
        }}
      >
        {' '}
        { title }
        {' '}

      </div>
      <div className="col-md-4 px-0">
        <div className="d-flex p-2 random">
          <div>
            { positive }
          </div>
          <div className="m-1 w-50 p-1 date-value">
            <h6>
              {
                            resToday.split(' ').slice(1).join(' ')
                        }
            </h6>
            <span>
              { measurement.duration }
              {' '}
              Hours
            </span>
          </div>
          <div className="mx-auto w-50 p-1 date-value d-flex">
            <h6 className="ml-auto">
              {' '}
              { errorValue }
              <span>
                {' '}
                hrs
                <i className="fas fa-angle-right" />
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

Measurement.propTypes = {
  measurement: PropTypes.shape({
    date: PropTypes.string,
    duration: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  diffVal: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Measurement;
