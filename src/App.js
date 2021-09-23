import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Store from './Store'
import Router from './router'
import { Helmet } from 'react-helmet'
const App = () => {
  return (
    <Store>
      {/* <Helmet> */}
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      {/* </Helmet> */}
    </Store>
  )
}

export default App
