import { memo } from 'react'

const ContadorHijo = ({ contador, sumar, restar }) => {
  console.log('Hijo del contador se renderiza')
  return (
    <div style={{ border: 'thin solid #000', margin: '1rem', padding: '1rem' }}>
      <h2>Contador Hijo</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
    </div>
  )
}
// para memorizar se debe envolver dentro de usememo el componente que se queira memorizar
export default memo(ContadorHijo)
