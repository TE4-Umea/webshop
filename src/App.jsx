import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./App.css"

import NavBar from './componets/Navbar'
import Footer from './componets/Footer'

import LandingPage from './pages/LandingPage'
import ProductPage from './pages/ProductPage'


import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route path='/' element={<LandingPage />} />
          <Route path='/ProductPage' element={<ProductPage />} />

        </Routes>

        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App