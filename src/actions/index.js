import axios from "axios";


export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

const URL = 'http://localhost:3000';


export function signInAction({ username, password }, history){
    return async (dispatch) => {
        const response = await axios.post(`${URL}/login`, { username, password })
        if (response.data.token) {
            dispatch({ type: AUTHENTICATED });
            localStorage.setItem('user', response.data.token);
            history.push('/activities')
        } else {
            dispatch({
                type: AUTHENTICATION_ERROR,
                payload: 'Invalid username or Password'
            })
            history.push('/signin')
        }
    }
}

export function signUpAction({username, password, age }, history){
    return async (dispatch) => {
        const response = await axios.post(`${URL}/users`, { username, password, age })
        if(response.data.token){
            dispatch({ type: AUTHENTICATED });
            localStorage.setItem('user', response.data.token)
            history.push('/activities')
        }
    }
}

export function signOut(){
    localStorage.clear('user')
    window.location.href = '/signin';
}
