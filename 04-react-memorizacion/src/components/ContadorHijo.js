import { memo } from 'react'

const ContadorHijo = () => {
  console.log('Hijo del contador se renderiza')
  return (
    <div style={{ border: 'thin solid #000', margin: '1rem', padding: '1rem' }}>
      <h2>Contador Hijo</h2>
    </div>
  )
}
// para memorizar se debe envolver dentro de usememo el componente que se queira memorizar
export default memo(ContadorHijo)
