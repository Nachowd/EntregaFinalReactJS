import { createRoot } from 'react-dom/client'
import { CartProvider } from './components/CartContext.jsx';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>,
)
