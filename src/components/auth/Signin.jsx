import React, { useState } from "react";
import { signInAction } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Signin = (props) =>{
    let { history } = props
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 

    const saveData = (event)=>{
        event.preventDefault()
        dispatch(signInAction({ username, password }, history))
    }

    const errorMessage = useSelector(state => state.authReducer.error)

    return (
        <div>
            <div className="login-section col-md-6 p-3 d-flex flex-column justify-content-around align-items-center">
                <h3>Log In</h3>
                <form onSubmit={ saveData }>
                    <input placeholder="Enter User Name" className="form-control mb-2 col-md-6" value = { username } onChange={(e) => setUsername(e.target.value)}></input><br/>
                    <input placeholder="Enter Password" className="form-control col-md-6" value = { password } onChange={(e) => setPassword(e.target.value)} type="password"></input>
                    <p>{ errorMessage ? errorMessage : '' }</p>
                    <button type="submit" className="btn btn-primary" >Submit</button> 
                </form>
                <Link to={{
                    pathname: "/signup"
                    }}><br/>
                        Don't have an account?
                </Link>
            </div>

        </div>
    )
}

export default Signin