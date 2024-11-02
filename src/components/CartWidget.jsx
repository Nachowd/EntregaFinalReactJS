import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from './CartContext'

function CartWidget() {
  const { cartQuan } = useContext(CartContext)
  return (
    <div className='flex items-center'>
      <Link to="/carrito" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-700 transition duration-300 flex items-center">
        <span className="material-icons mr-1"><FaShoppingCart className="text-2xl" /></span>
        <span className="bg-purple-700 text-white rounded-full px-2 py-1 text-xs">
          
          {cartQuan()}
        </span>
      </Link>
    </div>
  )
}

export default CartWidget