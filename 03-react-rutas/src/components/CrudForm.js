import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const initialForm = {
  name: '',
  constellation: '',
  id: null,
}

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState({ initialForm })
  let navigate = useNavigate()
  // let navigate = useNavigate(); navigate(`/santos/editar/${id}`);
  useEffect(() => {
    if (dataToEdit) {
      // Actualiza los datos con los datos ingresados en el formulario
      setForm(dataToEdit)
    } else {
      // Limpiamos el formulario
      setForm(initialForm)
    }
  }, [dataToEdit])

  // manejo de cambio
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  // manejo de envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    // Para evitar que se envien los datos vacios
    if (!form.name || !form.constellation) {
      alert('Datos incompletos')
      return
    }
    //Feterminar si debemos crear o actualizar
    if (form.id === null) {
      createData(form)
    } else {
      updateData(form)
    }

    handleReset()
  }
  // manejo del boton de limpieza del form y del estado
  const handleReset = (e) => {
    setForm(initialForm)
    setDataToEdit(null)
    // para redireccionar a la hora de agregar un nuevo registro
    navigate('/')
  }

  return (
    <div>
      <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Nombre'
          onChange={handleChange}
          value={form.name}
        />
        <input
          type='text'
          name='constellation'
          placeholder='Constelación'
          onChange={handleChange}
          value={form.constellation}
        />
        <input type='submit' value='Enviar' />
        <input type='reset' value='Limpiar' onClick={handleReset} />
      </form>
    </div>
  )
}

export default CrudForm
