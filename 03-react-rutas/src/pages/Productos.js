import { useLocation, useNavigate } from 'react-router-dom'

const Productos = () => {
  // let location = useLocation()
  // console.log(location)
  let { search } = useLocation()
  // Serializa los parametros
  let query = new URLSearchParams(search)
  // console.log(query)
  // Obtener cada uno de los parametros
  let LIMIT = 20
  let start = parseInt(query.get('inicio')) || 1
  let end = parseInt(query.get('fin')) || LIMIT
  // console.log(start, end)
  // Hook que maneja el historial
  let navigate = useNavigate()
  // console.log(navigate)

  const handlePrev = () => {
    navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`)
  }
  const handleNext = () => {
    navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`)
  }
  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando Productos del <b>{start}</b> al <b>{end}</b>.
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
      {end < 100 && <button onClick={handleNext}>Adelante</button>}
    </div>
  )
}

export default Productos
