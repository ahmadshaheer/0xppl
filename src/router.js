// import Loading from 'src/components/Loading';
import React from 'react'
import { Switch } from 'react-router-dom'
import Feed from './pages/Feed';
import { DynamicLayoutRouter } from 'src/helpers/layouts';
import {MainLayout} from 'src/layouts';
// import CommunitiesLayout from 'src/layouts/CommunitiesLayout';
// import MessagesLayout from 'src/layouts/MessagesLayout';
// import Loadable from 'react-loadable';


// const Feed = Loadable({
//   loader: () => import('./pages/Feed' /* webpackChunkName: "Feed" */),
//   loading: ({ isLoading }) => isLoading && <Loading />,
// });


function Router() {
  return (
    <Switch>
      {/* <Route path='/' component={Feed} /> */}
      <DynamicLayoutRouter  path='/' layout={MainLayout} component={Feed}></DynamicLayoutRouter>
    </Switch>
  )
}

export default Router
