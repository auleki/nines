import React from 'react'
import PageRoutes from './components/PageRoutes'
import Navbar from './layouts/Navbar'
import { AppContainer } from './components/styledComponents'

const App = () => {
  return (
    <>
      <Navbar />
      <PageRoutes />
    </>
  )
}

export default App
