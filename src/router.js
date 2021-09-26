// import Loading from 'src/components/Loading';
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Feed from './pages/Feed';
import Messages from './pages/Messages';
import Communities from './pages/Communities';
import { DynamicLayoutRouter } from 'src/helpers/layouts';
import {MainLayout, MessagesLayout, CommunitiesLayout} from 'src/layouts';
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
      <DynamicLayoutRouter  exact name="feed" path='/feed' layout={MainLayout} component={Feed}></DynamicLayoutRouter>
      <DynamicLayoutRouter  exact name="messages" path='/messages' layout={MessagesLayout} component={Messages}></DynamicLayoutRouter>
      <DynamicLayoutRouter  exact name="communities" path='/communities' layout={CommunitiesLayout} component={Communities}></DynamicLayoutRouter>
      
      <Route render={() => <Redirect to="/feed" />} />

    </Switch>
  )
}

export default Router
