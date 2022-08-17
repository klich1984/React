import { useEffect, useState } from 'react'
import './ColorPicker.css'

const ColorPiker = () => {
  let dataStorage = JSON.parse(localStorage.getItem('colorPicker')) || []
  let lastColor = dataStorage[dataStorage.length - 1] || '#000000'

  const [color, setColor] = useState(lastColor)
  const [storage, setStorage] = useState(dataStorage)

  const handleChangeColor = (e) => {
    let value = e.target.value
    setColor(value)
  }
  // console.log(storage)

  const handleClickBtn = () => {
    // if (storage.indexOf(color) === -1) {
    //   let data = [...storage, color]
    //   setStorage(data)
    // }
    console.log(storage.includes(color))
    if (storage.includes(color)) return
    let data = [...storage, color]
    setStorage(data)
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
      <div className='container-save-colors'>
        {storage.map((el) => (
          <span
            className='color-item'
            style={{
              backgroundColor: `${el} `,
            }}
            key={el}
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ColorPiker
