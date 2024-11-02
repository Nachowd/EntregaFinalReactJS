import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import { Toaster, toast } from 'sonner'

function ItemDetail({ id, image, title, description, price, category, stock }) {
  const [quanAdd, setQuanAdd] = useState(0)
  const { addProd } = useContext(CartContext)
  const onAdd = (q) => {
    setQuanAdd(q)
    const prod = { id, title, price, image }
    addProd(prod, q)
    toast.success(`${q} ${title}(s) añadido(s) al carrito`)
  }

  return (
    <>
      <Toaster position='top-right'/>
      <article className="max-w-4xl mx-auto my-8 p-8 bg-gray-100 rounded-2xl shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img src={image} alt={title} className="w-full h-auto object-cover rounded-xl shadow-[inset_5px_5px_15px_rgba(0,0,0,0.1),inset_-5px_-5px_15px_rgba(255,255,255,0.8)]" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            <p className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full inline-block shadow-md">Categoría: {category}</p>
            <p className="text-gray-700">{description}</p>
            <p className="text-2xl font-bold text-gray-800">${price}</p>
            {quanAdd > 0 ? (
              <Link to='/carrito' className='block w-full text-center bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300 shadow-md'>IR AL CARRITO</Link>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={onAdd} />
            )}
            <Link to='/productos' className='block w-full text-center bg-gray-200 text-gray-700 py-2 px-4 rounded-full font-semibold hover:bg-gray-300 transition duration-300 shadow-md mt-4'>Regresar</Link>
          </div>
        </div>
      </article>
    </>
  )
}

export default ItemDetail