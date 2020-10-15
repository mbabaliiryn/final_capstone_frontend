import React, { useState } from 'react'
import { createActivity } from '../actions/activitiesAction'
import { useDispatch } from 'react-redux'
import Footer from '../components/Footer'


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
        <div  className="card col-md-3 p-3">
            <h3>Create Activity</h3>
            <form onSubmit={ submitAcvtivty }>
                <input 
                type="text"
                placeholder="Enter Title"
                value = { title } 
                onChange={ e => setTitle(e.target.value) } className="form-control mb-2"></input>
                <input 
                type="number"
                placeholder="Enter Total"
                value = { total } 
                onChange={ e => setTotal(e.target.value) } className="form-control"></input>
                <input
                type='file'
                onChange={(e) => setImage(e.target.files[0])}
                ></input>
                <button type="submit" className="btn btn-primary mt-1">
                    Create
                </button>
            </form>
        </div>
        <Footer/>
        </div>
    )
}

export default CreateActivity
