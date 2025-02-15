import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/Navbar'
import Footer from './components/Footer'

import LandingPage from './pages/LandingPage'
import ProductPage from './pages/ProductPage'
import ProductsPage from './pages/ProductsPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={<LandingPage />} />
          <Route path='/ProductPage' element={<ProductPage />} />
          <Route path='/ProductsPage' element={<ProductsPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App