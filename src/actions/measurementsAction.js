import axios from 'axios'
export const FETCH_MEASUREMENTS_SUCCESS = 'FETCH_MEASUREMENTS_SUCCESS'
export const FETCH_MEASUREMENTS_FAILURE = 'FETCH_MEASUREMENTS_FAILURE'

const URL = 'http://localhost:3000/api/activities'


export const fetchMeasurementsSuccess = measurements => ({
    type: FETCH_MEASUREMENTS_SUCCESS,
    payload: measurements
})

export const fetchMeasurementsFailure = error => ({
    type: FETCH_MEASUREMENTS_FAILURE,
    payload: error
})

export const createMeasurement = ({ duration, date }, activityId)=> dispatch => {
    axios.post(`${URL}/${activityId}/measurements`, { duration, date  },{ 
        headers: {"Authorization" : `Bearer ${localStorage.user}`} 
    }).then(response => {
        dispatch(fetchMeasurements(activityId))
    }).catch(error => {
        dispatch(fetchMeasurementsFailure(error))
    })
}

export const fetchMeasurements = (id) => dispatch => {
    axios.get(`${URL}/${id}/measurements`, 
        { headers: {"Authorization" : `Bearer ${localStorage.user}`} }
        ).then( response => {
        const measurements = response.data;
        dispatch(fetchMeasurementsSuccess(measurements))
    }).catch(error => {
        const errMsg = error
        dispatch(fetchMeasurementsFailure(errMsg))
    })

}
