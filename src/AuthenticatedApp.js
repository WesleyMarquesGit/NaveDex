import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from 'routes/Home'
import AddNaver from 'routes/AddNaver'
import EditNaver from 'routes/EditNaver'

const AuthenticatedApp = () => (
  <Switch>
    <Route path='/home' component={Home} />
    <Route path='/add' component={AddNaver} />
    <Route path='/edit/:id' component={EditNaver} />
    <Redirect to='/home' />
  </Switch>
)

export default AuthenticatedApp
