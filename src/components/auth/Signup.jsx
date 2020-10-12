import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { signUpAction } from '../../actions'
import { Link } from 'react-router-dom'

const Signup = ( props ) => {

    let { history } = props
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const dispatch = useDispatch()

    const submitData = (event) => {
        event.preventDefault()
        dispatch(signUpAction({username, password, age}, history))
    }

    return(
        <div>
        <div>
            <h3>Sign Up</h3>
        <form onSubmit = { submitData }>
            <input 
            placeholder="Enter User Name" 
            value = { username } 
            onChange={ e => setUsername(e.target.value) }></input>
            <input 
            placeholder="Enter Password"  
            type="password"
            value = { password } 
            onChange= { e => setPassword(e.target.value )}></input>
            <input  
            placeholder="Enter Age" 
            value = { age } 
            onChange = { e => setAge(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form> 
        <Link to={{
                pathname: "/signin"
            }}>
                Already have an Account?
            </Link>
        </div>

        </div>
    )
}

export default Signup