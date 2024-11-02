import React, { useState } from 'react'

function ItemCount({ initial, stock, onAdd }) {
  const [quan, setQuan] = useState(initial)

  const increment = () => {
    if (quan < stock) {setQuan(quan + 1)}
  }

  const decrement = () => {
    if (quan > 0) {setQuan(quan - 1)}
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <button onClick={decrement} className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center shadow-md hover:bg-gray-300 transition duration-300">-</button>
        <span className="text-2xl font-bold">{quan}</span>
        <button onClick={increment} className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center shadow-md hover:bg-gray-300 transition duration-300">+</button>
      </div>
      <button onClick={() => onAdd(quan)} className="w-full bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition duration-300 shadow-md">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount