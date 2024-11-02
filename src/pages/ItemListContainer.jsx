import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Link, NavLink, useParams } from 'react-router-dom'
import ItemList from '../components/ItemList'
import { Loader } from '../components/Loader';
import { db } from '../DB/Firebase'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { category } = useParams()

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const prodCollection = collection(db, "products");
        let q = prodCollection;

        if (category) {
          q = query(prodCollection, where("category", "==", category));
        }

        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
      } catch (err) {
        setError("Error al cargar los productos. Por favor, intenta de nuevo más tarde.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (isLoading) return <Loader />;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto">
      <ul className="flex flex-wrap justify-center my-2 p-5 uppercase">
        <li><Link to="/productos" className="px-5 mx-5 hover:text-blue-600 transition-colors duration-300">todos</Link></li>
        <li><NavLink to="/productos/electronicos" className="px-5 mx-5 hover:text-blue-600 transition-colors duration-300">electronicos</NavLink></li>
        <li><NavLink to="/productos/ropa hombres" className="px-5 mx-5 hover:text-blue-600 transition-colors duration-300">ropa hombres</NavLink></li>
        <li><NavLink to="/productos/ropa mujeres" className="px-5 mx-5 hover:text-blue-600 transition-colors duration-300">ropa mujeres</NavLink></li>
        <li><NavLink to="/productos/joyas" className="px-5 mx-5 hover:text-blue-600 transition-colors duration-300">joyas</NavLink></li>
      </ul>
      <section className="">
        {products.length > 0 ? (
          <ItemList product={products} />
        ) : (
          <p className="text-center">No se encontraron productos para esta categoría.</p>
        )}
      </section>
    </div>
  )
}

export default ItemListContainer