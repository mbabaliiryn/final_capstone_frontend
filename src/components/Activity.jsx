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
        <div className="main-section d-flex p-1 m-2 bg-white">
            <div className="w-50 bg-secondary image-section">
                <img src={ activity.avatar.url } alt="boohoo" className="image-det"/>
            </div>
            <div className="activity-body ml-1">
                <div>
                    <span  className="activity-title text-secondary">{ activity.title }</span>
                </div>
                <div>
                    <span className="activity-text text-secondary">{ activity.total }</span>
                </div>
                <div className="lower-section">
                    <Link className="links-info" to={{
                        pathname: `/activity/${activity.id}/measurements`,
                        state: activity.id,
                        actTitle: activity.title
                    }}>
                        Details
                    </Link>
                    <i className="far fa-trash-alt ml-4 text-secondary" onClick = {() => deleteAct(activity.id) }></i>
                </div>
            </div>
        </div>
    )
}

export default Activity
