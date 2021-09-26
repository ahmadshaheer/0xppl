import Loading from 'src/components/Loading';
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DynamicLayoutRouter } from 'src/helpers/layouts';
import Loadable from 'react-loadable';


const Feed = Loadable({
  loader: () => import('src/pages/Feed' /* webpackChunkName: "Feed" */),
  loading: ({ isLoading }) => isLoading && <Loading />,
});

const Messages = Loadable({
  loader: () => import('src/pages/Messages' /* webpackChunkName: "Messages" */),
  loading: ({ isLoading }) => isLoading && <Loading />,
});

const Communities = Loadable({
  loader: () => import('src/pages/Communities' /* webpackChunkName: "Communities" */),
  loading: ({ isLoading }) => isLoading && <Loading />,
});
const MainLayout = Loadable({
  loader: () => import('src/layouts/MainLayout' /* webpackChunkName: "MainLayout" */),
  loading: ({ isLoading }) => isLoading && <Loading />,
});

const MessagesLayout = Loadable({
  loader: () => import('src/layouts/MessagesLayout' /* webpackChunkName: "MessagesLayout" */),
  loading: ({ isLoading }) => isLoading && <Loading />,
});

const CommunitiesLayout = Loadable({
  loader: () => import('src/layouts/CommunitiesLayout' /* webpackChunkName: "CommunitiesLayout" */),
  loading: ({ isLoading }) => isLoading && <Loading />,
});


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
