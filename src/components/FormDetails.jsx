const FormDetails = ({ createOrder, handleOnChange, userDate }) => {
  return (
    <>
      <main className="w-5/12 mx-auto">
        <form onSubmit={createOrder} className="flex flex-col text-center">
          <label htmlFor="name" className="text-2xl font-semibold">Nombre y Apellido</label>
          <input name="name" className="m-4 border-black border-2 rounded-lg text-xl p-2" required="" placeholder="Nombre y Apellido" type="text" id="name" onChange={handleOnChange} value={userDate.name} />
          <label htmlFor="number" className="text-2xl font-semibold">telefono</label>
          <input name="number" className="m-4 border-black border-2 rounded-lg text-xl p-2" required="" placeholder="telefono" type="text" id="number" onChange={handleOnChange} value={userDate.number} />
          <label htmlFor="email" className="text-2xl font-semibold">Email</label>
          <input name="email" className="m-4 border-black border-2 rounded-lg text-xl p-2" required="" placeholder="Email" type="email" id="email" onChange={handleOnChange} value={userDate.email} />
          <label htmlFor="repeatEmail" className="text-2xl font-semibold">Repetir Email</label>
          <input name="repeatEmail" className="m-4 border-black border-2 rounded-lg text-xl p-2" required="" placeholder="Repite email" type="email" id="repeatEmail" onChange={handleOnChange} value={userDate.repeatEmail} />
          <label htmlFor="direction" className="text-2xl font-semibold">domicilio</label>
          <input name="direction" className="m-4 border-black border-2 rounded-lg text-xl p-2" required="" placeholder="domicilio" type="text" id="direction" onChange={handleOnChange} value={userDate.direction} />
          <button className="p-3 bg-slate-700 mx-64 text-white uppercase rounded-lg">Realizar pedido</button>
        </form>
      </main>
    </>
  );
};

export default FormDetails;