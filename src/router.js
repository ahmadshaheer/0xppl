import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Feed from './pages/Feed'


function Router() {
  return (
    <Switch>
      <Route path='/' component={Feed} />
    </Switch>
  )
}

export default Router
