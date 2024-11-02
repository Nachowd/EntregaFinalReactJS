import React from 'react'
import Item from './Item'

function ItemList({ product }) {
  return (
    <div className="w-full mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map(prod => <Item key={prod.id} {...prod} />)}
      </div>
    </div>
  )
}

export default ItemList