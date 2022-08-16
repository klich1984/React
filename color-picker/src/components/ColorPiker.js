import { useState } from 'react'
import './ColorPicker.css'

const ColorPiker = () => {
  const [color, setColor] = useState('#fff')

  const handleChangeColor = (e) => {
    let value = e.target.value
    setColor(value)
  }

  return (
    <div className='container-color-picker'>
      <h2>Select Color</h2>
      <input
        type='color'
        name='color'
        id='color'
        onChange={handleChangeColor}
      />
      <h3>Color in HEX:</h3>
      <span
        className='colo-picker-color'
        style={{
          backgroundColor: `${color} `,
        }}
      >
        {color}
      </span>
    </div>
  )
}

export default ColorPiker
