import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signin from './auth/Signin'
import Activities from '../container/Activities'
import Navbar from './Navbar'
import CreateActivity from './CreateActivity'
import Measurements from '../container/Measurements'
import CreateMeasurement from '../components/CreateMeasurement'
import PrivateRoute from './PrivateRoute'
import Signup from '../components/auth/Signup'

const Router = () => {
    return (
        <div>
           <Navbar/> 
            <BrowserRouter>
                <Switch>
                    <Route exact path="/signin" component= { Signin }/>
                    <Route exact path="/signup" component= { Signup }/>
                    <PrivateRoute exact path="/activities" component= { Activities }/>
                    <PrivateRoute exact path="/create-activity" component={CreateActivity}/>
                    <PrivateRoute exact path="/activity/:id/measurements" component={ Measurements }/>
                    <PrivateRoute exact path="/activity/:id/create" component={ CreateMeasurement }/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router