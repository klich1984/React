import { useNavigate } from 'react-router-dom'

const SongTableRow = ({ el, id, handleDeleteSong }) => {
  // console.log(el)
  let { bio, search } = el
  let avatar = bio.artists[0].strArtistThumb

  let avatarStyles = {
    with: 'auto',
    height: '40px',
  }

  let navigate = useNavigate()
  return (
    <tr>
      <td>
        <img style={avatarStyles} src={avatar} alt={search.artist} />
      </td>
      <td>{search.artist}</td>
      <td>{search.song}</td>
      <td>
        <button onClick={() => navigate(`/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  )
}

export default SongTableRow
