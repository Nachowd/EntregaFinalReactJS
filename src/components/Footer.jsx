import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <ul className="text-center md:text-left mb-4 md:mb-0">
          <li className="text-sm">&copy; e-commerce para entrega | All Rights Reserved</li>
          <li className="text-xs mt-2">
            Diseño y Desarrollo por <a href="mailto:francooursinoo@gmail.com" className="underline hover:text-gray-300">Franco Ursino</a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <Link to="mailto:extremecombatshop@gmail.com" className="hover:text-gray-300">
            <Mail size={24} />
          </Link>
          <Link to="https://wa.me/+5491222122212?text=Buenas!+me+contacto+desde+la+página+web" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <Phone size={24} />
          </Link>
          <Link to="#" className="hover:text-gray-300">
            <Facebook size={24} />
          </Link>
          <Link to="#" className="hover:text-gray-300">
            <Instagram size={24} />
          </Link>
          <Link to="#" className="hover:text-gray-300">
            <Twitter size={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer