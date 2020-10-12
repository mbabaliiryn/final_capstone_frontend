import React, { useState } from 'react'
import { createActivity } from '../actions/activitiesAction'
import { useDispatch } from 'react-redux'

const CreateActivity = ({ history }) => {
    const [title, setTitle] = useState('')
    const [total, setTotal] = useState('')
    const [image, setImage] = useState(null)
    const dispatch = useDispatch()

    const submitAcvtivty = (event) => {
        
        const form = new FormData()
        form.append("title", title)
        form.append("total", total)
        form.append("avatar", image)
        dispatch(createActivity(form, history))
        event.preventDefault()

    }

    return (
        <div>
        <div>
            <h3>Create Activity</h3>
            <form onSubmit={ submitAcvtivty }>
                <input 
                type="text"
                placeholder="Enter Title"
                value = { title } 
                onChange={ e => setTitle(e.target.value) }></input>
                <input 
                type="number"
                placeholder="Enter Total"
                value = { total } 
                onChange={ e => setTotal(e.target.value) }></input>
                <input
                type='file'
                onChange={(e) => setImage(e.target.files[0])}
                ></input>
                <button type="submit">
                    Create
                </button>
            </form>
        </div>
        </div>
    )
}

export default CreateActivity