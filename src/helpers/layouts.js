import { Route } from "react-router-dom"

export const DynamicLayoutRouter = ({component: Component, layout: Layout, ...rest}) => {
    return <Route 
              {...rest} 
              render={props => (
                <Layout><Component {...rest} ></Component></Layout>
              )} 
            >
  
            </Route>
  }