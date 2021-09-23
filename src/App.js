import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Store from './Store'
import Router from './router'
import { HelmetProvider } from 'react-helmet-async'
const App = () => {
  return (
    <HelmetProvider>
      <Store>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
      </Store>
    </HelmetProvider>
  )
}

export default App
