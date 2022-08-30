import del from '../assets/delete.svg'

const Colors = ({ storage, handleDelete }) => {
  return (
    <div className='container-save-colors'>
      {storage.map((color) => (
        <div
          key={color}
          style={{
            backgroundColor: `${color}`,
          }}
        >
          <div className='color-item'>{color}</div>
          <img
            className='img-del'
            src={del}
            alt='delete'
            onClick={() => handleDelete(color)}
          />
        </div>
      ))}
    </div>
  )
}

export default Colors
