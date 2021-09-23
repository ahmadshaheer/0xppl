// import Loading from 'src/components/Loading';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Feed from './pages/Feed';
// import Loadable from 'react-loadable';


// const Feed = Loadable({
//   loader: () => import('./pages/Feed' /* webpackChunkName: "Feed" */),
//   loading: ({ isLoading }) => isLoading && <Loading />,
// });

function Router() {
  return (
    <Switch>
      <Route path='/' component={Feed} />
    </Switch>
  )
}

export default Router
