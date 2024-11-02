import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, TrendingUp, Truck } from 'lucide-react'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from '../DB/Firebase'

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const productsRef = collection(db, 'products')
        const q = query(productsRef, limit(8))
        const querySnapshot = await getDocs(q)
        const products = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        const shuffled = products.sort(() => 0.5 - Math.random())
        setFeaturedProducts(shuffled.slice(0, 4))
      } catch (error) {
        console.error("Error fetching featured products:", error)
      }
    }

    fetchFeaturedProducts()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a Nuestra Tienda</h1>
          <p className="text-xl mb-8">Descubre las últimas tendencias en moda y tecnología</p>
          <Link to="/productos" className="bg-white text-blue-600 py-3 px-8 rounded-full font-bold hover:bg-blue-100 transition duration-300">
            Comprar Ahora
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Por qué elegirnos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShoppingBag className="w-12 h-12 text-blue-500" />}
              title="Amplia Selección"
              description="Miles de productos para elegir en todas las categorías"
            />
            <FeatureCard 
              icon={<TrendingUp className="w-12 h-12 text-blue-500" />}
              title="Últimas Tendencias"
              description="Siempre a la vanguardia con los productos más actuales"
            />
            <FeatureCard 
              icon={<Truck className="w-12 h-12 text-blue-500" />}
              title="Envío Rápido"
              description="Entrega garantizada en 24-48 horas a todo el país"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                category={product.category}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/productos" className="bg-blue-500 text-white py-3 px-8 rounded-full font-bold hover:bg-blue-600 transition duration-300">
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function ProductCard({ id, image, title, price, category }) {
  return (
    <article className="m-4">
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
          <Link to={`/item/${id}`} className="inline-block px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-semibold transition duration-300 ease-in-out hover:bg-gray-300 hover:shadow-[inset_3px_3px_5px_rgba(0,0,0,0.1),inset_-3px_-3px_5px_rgba(255,255,255,0.8)]">ver más</Link>
        </div>
      </div>
    </article>
  )
}

export default Home