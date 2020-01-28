import React from 'react'
import { Home } from './pages/Home'
import { NoMatch } from './pages/NoMatch'
import { Route, Switch } from 'react-router-dom'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route component={NoMatch}/>
    </Switch>
  )
}
