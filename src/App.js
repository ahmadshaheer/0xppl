import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Store from './Store'
import Router from './router'
import { HelmetProvider } from 'react-helmet-async'
import { ErrorBoundary } from 'react-error-boundary'
const App = () => {
  return (
    <Store>
      <ErrorBoundary>
        <HelmetProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </HelmetProvider>
      </ErrorBoundary>
    </Store>
  )
}

export default App
