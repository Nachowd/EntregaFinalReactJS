import React from 'react'
import { Link } from 'react-router-dom'

function Item({ id, title, price, image, category }) {
  return (
    <article key={id} className="m-4">
      <div className="bg-gray-100 rounded-2xl shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] p-6 transition duration-300 ease-in-out hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.1),inset_-5px_-5px_15px_rgba(255,255,255,0.8)]">
        <div className="relative mb-4">
          <p className="absolute left-2 top-2 px-3 py-1 bg-white text-gray-700 text-sm font-semibold rounded-full shadow-md z-10">
            {category}
          </p>
          <img src={image} alt={title} className="w-full h-48 object-contain rounded-xl" />
        </div>
        <div className="text-center">
          <h3 className="text-sm font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">Precio ${price}</p>
          <Link 
            to={`/item/${id}`} 
            className="inline-block px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold transition duration-300 ease-in-out hover:bg-gray-300 hover:shadow-[inset_3px_3px_5px_rgba(0,0,0,0.1),inset_-3px_-3px_5px_rgba(255,255,255,0.8)]"
          >
            ver más
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Item