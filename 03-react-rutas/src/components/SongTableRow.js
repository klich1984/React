import { useNavigate } from 'react-router-dom'

const SongTableRow = ({ el, id, handleDeleteSong }) => {
  // console.log(el)
  let { bio, search } = el
  let avatar = bio.artists[0].strArtistThumb

  let navigate = useNavigate()
  return (
    <tr>
      <td>
        <img src={avatar} alt={search.artist} />
      </td>
      <td>{search.artist}</td>
      <td>{search.song}</td>
      <td>
        <div className='container-actions'>
          <button onClick={() => navigate(`/${id}`)}>Ver</button>
          <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
        </div>
      </td>
    </tr>
  )
}

export default SongTableRow
