import { CartContext } from '../components/CartContext'
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem"
import { Toaster, toast } from 'sonner';


const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  return (

    <div>
      <Toaster richColors position='top-right'/>
      {cart.length > 0 ?
        (<div className="gap-3" >{cart.map((product) => <CartItem key={product.id} product={product} />)}
          <div className="text-center my-44">
            <h3 className='font-semibold text-lg mb-8'>Total: ${total()}</h3>
            <button onClick={() => {clearCart(); toast.error('vaciaste tu carrito')}} className="mx-6 uppercase p-2 rounded-xl bg-stone-700 text-white">eliminar todo</button>
            <Link to="/checkout" className="uppercase bg-stone-700 text-white p-2 rounded-xl">realizar pedido</Link>
          </div>
        </div>)
        :
        (<>
        <div className="flex flex-col text-center">
          <h2 className="cart__clear--text mb-4">Tu carrito está vacio</h2>
          <Link to="/productos" className="cart__clear--btn m-auto">Ver Productos</Link>
        </div>
        </>)
      }
    </div>
  )

};

export default Cart;