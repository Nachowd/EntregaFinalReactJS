import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import CartWidget from './CartWidget'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <ShoppingBag className="h-8 w-8 mr-2 text-purple-600" />
                <span className="font-semibold text-gray-500 text-lg">TIENDA</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              to="/productos" 
              className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-700 transition duration-300"
            >
              Productos
            </Link>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  )
}