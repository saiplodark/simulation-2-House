import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Wizard from './Components/Wizard'

export default <Switch>
    <Route exact path ='/' component ={Dashboard}/>
    <Route path ='/wizard' component ={Wizard}/>
</Switch>