import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteActivity } from '../actions/activitiesAction'
import { Link } from "react-router-dom";

const Activity = ({ activity }) => {

    const dispatch = useDispatch()

    const deleteAct = (id) => {
        dispatch(deleteActivity(id))
    }

    return (
        <div>
            <div >
                <img src={ activity.avatar.url } alt="boohoo"/>
            </div>
            <div>
                <div>
                    <span>{ activity.title }</span>
                </div>
                <div>
                    <span>{ activity.total }</span>
                </div>
                <div>
                    <Link to={{
                        pathname: `/activity/${activity.id}/measurements`,
                        state: activity.id,
                        actTitle: activity.title
                    }}>
                        Details
                    </Link>
                    <i onClick = {() => deleteAct(activity.id) }></i>
                </div>
            </div>
        </div>
    )
}

export default Activity
