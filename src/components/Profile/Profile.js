import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Sidebar from './../Sidebar/Sidebar'
import Home from './../Home/Home'
import Terminals from './../Terminals/Terminals'
import Buyers from './../Buyers/Buyers'
import Buyer from './../Buyers/Buyer'
import NotFound from '../NotFound/NotFound'

import './Profile.css'
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Profile(props) {
  return(
    <div className='profile h-100 d-lg-flex'>
      <Sidebar props={props}/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/terminals' component={Terminals}/>
        <Route exact path='/buyers' component={Buyers}/>
        <Route path="/buyers/:id" component={Buyer}/>
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  )
}