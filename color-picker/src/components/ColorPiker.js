import { useEffect, useState } from 'react'
import './ColorPicker.css'
import Colors from './Colors'

const ColorPiker = () => {
  let dataStorage = JSON.parse(localStorage.getItem('colorPicker')) || []
  let lastColor = dataStorage[dataStorage.length - 1] || '#000000'

  const [color, setColor] = useState(lastColor)
  const [storage, setStorage] = useState(dataStorage)

  const handleChangeColor = (e) => {
    let value = e.target.value
    setColor(value)
  }

  const handleClickBtn = () => {
    // Find if it's already saved
    if (storage.includes(color)) return

    let data = [...storage, color]
    setStorage(data)
  }

  const handleDelete = (color) => {
    let conf = window.confirm(`Esta seguro de eliminar el color "${color}"`)
    if (!conf) return
    let newStorage = storage.filter((el) => el !== color)
    setStorage(newStorage)
  }

  // Update LocalStorage
  useEffect(() => {
    localStorage.setItem('colorPicker', JSON.stringify(storage))
  }, [storage])

  return (
    <div className='container-color-picker'>
      <h2>Select Color</h2>
      <h3>Color in HEX:</h3>
      <span
        className='color-picker-color'
        style={{
          backgroundColor: `${color} `,
        }}
      >
        {color}
      </span>
      <input
        type='color'
        name='color'
        id='color'
        onChange={handleChangeColor}
        value={color}
        // onBlur={handleBlurColor}
      />
      <button onClick={handleClickBtn} className='btn'>
        Save Color
      </button>
      <Colors storage={storage} handleDelete={handleDelete} />
    </div>
  )
}

export default ColorPiker
