import {
  fetchMeasurementsSuccess,
  fetchMeasurementsFailure,
  FETCH_MEASUREMENTS_SUCCESS,
  FETCH_MEASUREMENTS_FAILURE,
} from '../../actions/measurementsAction';

describe('measurements', () => {
  it('should fetch a list measurements', () => {
    const measurements = [
      { duration: 'test', date: 'sample date' },
    ];

    const expectedAction = {
      type: FETCH_MEASUREMENTS_SUCCESS,
      payload: measurements,
    };
    expect(fetchMeasurementsSuccess(measurements)).toEqual(expectedAction);
    expect(fetchMeasurementsSuccess(measurements)).not.toEqual('some random arrays');
  });

  it('fail to fetch measurement lists', () => {
    const error = 'failed to load measurements';

    const expectedAction = {
      type: FETCH_MEASUREMENTS_FAILURE,
      payload: error,
    };
    expect(fetchMeasurementsFailure(error)).toEqual(expectedAction);
    expect(fetchMeasurementsFailure(error)).not.toEqual('some random string');
  });
});
