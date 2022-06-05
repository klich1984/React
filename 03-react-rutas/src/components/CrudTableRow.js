import React from 'react'
import { useNavigate } from 'react-router-dom'

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, constellation, id } = el
  let navigate = useNavigate()

  const handleEdit = () => {
    setDataToEdit(el)
    // redirecciona a la pagina de editar con el id seleccionado
    navigate(`/editar/${id}`)
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  )
}

export default CrudTableRow
