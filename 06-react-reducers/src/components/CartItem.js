const CartItem = ({ data, delFromCart }) => {
  console.log(data)
  const { id, name, price } = data
  return (
    <div style={{ borderBottom: 'thin solid gray', padding: '1rem' }}>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={delFromCart}>Eliminar</button>
    </div>
  )
}

export default CartItem
