import React, { useContext, useState } from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { OrderConfirm } from '../components/OrderConfirm'
import FormDetails from '../components/FormDetails'
import { CartContext } from '../components/CartContext';


export const Checkout = () => {
  const { cart, clearCart, total } = useContext(CartContext)
  const [order, setOrder] = useState(null)
  const [userDate, setUserDate] = useState({ name: "", email: "", repeatEmail: "", number: "", direction: "" })

  const createOrder = (evt) => {
    evt.preventDefault()

    if (userDate.name.trim() === "" || userDate.number.trim() === "" || userDate.email.trim() === "" || userDate.repeatEmail.trim() === "" || userDate.direction.trim() === "") {
      alert("ingrese todos los datos")
      return
    }

    if (userDate.repeatEmail.trim() !== userDate.email.trim()) {
      alert("repita el correo igual que el anterior")
      return
    }

    const buyOrder = {}
    buyOrder.buyer = userDate
    buyOrder.prod = cart.map(({ title, id, price, quantity }) => ({ id, title, price, quantity }))
    buyOrder.totalP = total()

    const db = getFirestore()
    const orderCollection = collection(db, "orders")
    addDoc(orderCollection, buyOrder)
      .then((res) => { setOrder(res.id) })
      .catch((err) => console.log(err))
      .finally(() => {
        setUserDate({ name: "", email: "", number: "" })
        setTimeout(() => { clearCart() }, 2000)
      })
  }

  const handleOnChange = (evt) => {
    setUserDate({ ...userDate, [evt.target.name]: evt.target.value, })
  }
  return (
    <>
      {order ? (
        <OrderConfirm order={order} />
      ) : (
        <FormDetails
          createOrder={createOrder}
          handleOnChange={handleOnChange}
          userDate={userDate}
        />
      )}
    </>
  );
}