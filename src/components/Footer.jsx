
import { Link } from 'react-router-dom'
import { Mail, Facebook, Instagram, Twitter } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <ul className="text-center md:text-left mb-4 md:mb-0">
          <li className="text-sm">&copy; Entrega Final ReactJS | All Rights Reserved</li>          
          <li className="text-xs mt-2">
            Developed by <a href="mailto:walterdiaz@gmail.com" className="underline hover:text-gray-300">Walter Diaz</a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <Link to="walterdiaz@gmail.com" className="hover:text-gray-300">
            <Mail size={24} />
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