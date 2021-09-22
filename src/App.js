import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Store from './Store'
import Router from './router'
const App = () => {
  return (
    <Store>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Store>
  )
}

export default App
