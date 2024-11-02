import React from 'react'
import { Link } from 'react-router-dom'

export const OrderConfirm = ({ order }) => {
  return (
    <div className='text-center my-64 flex flex-col space-y-60'>
      <h1 className="text-center my-3 text-xl font-bold">
        El ID de su orden es: {order}
      </h1>
        <Link to="/productos" className=' border-2 p-3 bg-slate-700 mx-64 text-white uppercase rounded-lg'>Volver a la tienda</Link>
    </div>
  )
}