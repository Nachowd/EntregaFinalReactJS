import { useContext } from "react";
import { CartContext } from './CartContext'
import { Toaster, toast } from "sonner";


const CartItem = ({ product }) => {
  const { removeProd } = useContext(CartContext);

  return (
      <div className="w-6/12 mx-auto my-5">
        <Toaster richColors position='top-right'/>
        <div className="grid grid-cols-3 px-5 justify-center border-slate-200 border-2 rounded-2xl">
          <div>
            <img src={product.image} alt={product.title} className="w-48" />
          </div>
          <div className="flex flex-col space-y-14 justify-center">
            <p className="uppercase font-bold">{product.title}</p>
            <p className=""> subtotal: ${product.price * product.quantity}</p>
          </div>
          <button className='bg-slate-200 hover:bg-slate-100 my-14 mx-32 rounded-xl' onClick={() => {removeProd(product.id); toast.error('eliminaste el producto del carrito')}}>X</button>
        </div>
      </div>
  );
};

export default CartItem;