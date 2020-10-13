import React, { useEffect } from'react'
import Activity from '../components/Activity'
import { useDispatch, useSelector } from 'react-redux'
import { fetchActivities } from '../actions/activitiesAction'
import Summary from '../components/Summary'
import Footer from '../components/Footer'

const Activities = () => {

    const activitiesReducer = useSelector( state => state.activitiesReducer )
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchActivities())
    }, [dispatch])

    let todaysDate = new Date()
    let result = todaysDate.toUTCString().split(' ')
    result.splice(4,2)
    let finalValue = result.join(' ')

    return activitiesReducer.loading ? ( <div> <h1> Loading....</h1> </div> ) : 
    activitiesReducer.error ? ( <div> { activitiesReducer.error } </div>) :
    (
        <div >
            <div>{ finalValue }</div>
            <div>
                <Summary activities = { activitiesReducer.activities }/>
            </div>
            <div>
                {
                activitiesReducer.activities.map((activity, key) => (
                        <Activity activity = { activity } key = { key }/>
                    ))
                }            
            </div>
            <Footer/>
        </div>
    ) 

}

export default Activities