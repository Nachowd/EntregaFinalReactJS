import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ItemDetailsContainer from './pages/ItemDetailsContainer';
import ItemListContainer from './pages/ItemListContainer';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Checkout } from './pages/Checkout';

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="py-8">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/productos' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailsContainer />} />
              <Route path='/productos/:category' element={<ItemListContainer />} />
              <Route path='/carrito' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
      </div>
    </>
  )
}

export default App