// import Loading from 'src/components/Loading';
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Feed from './pages/Feed';
import { DynamicLayoutRouter } from 'src/helpers/layouts';
import {MainLayout, MessagesLayout} from 'src/layouts';
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
      <DynamicLayoutRouter  exact path='/feeds' layout={MainLayout} component={Feed}></DynamicLayoutRouter>
      <DynamicLayoutRouter  exact path='/messages' layout={MessagesLayout} component={Feed}></DynamicLayoutRouter>
      
      <Route render={() => <Redirect to="/feeds" />} />

    </Switch>
  )
}

export default Router
