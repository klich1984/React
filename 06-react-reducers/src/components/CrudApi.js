import React, { useState, useEffect, useReducer } from 'react'
import { TYPES } from '../actions/crudActions'
import { helpHttp } from '../helpers/helpHttp'

import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader'
import Message from './Message'
import { crudInitialState, crudReducer } from './reducers/crudReducer'

const CrudApi = () => {
  // const [db, setDb] = useState(null)
  const [state, dispatch] = useReducer(crudReducer, crudInitialState)
  const { db } = state
  // estado para saber si vamos a actualizar o crear. null inserccion, true actualización
  const [dataToEdit, setDataToEdit] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // variables peticion fetch
  let api = helpHttp()
  let url = 'http://localhost:5000/santos'
  // let urlBad = 'http://localhost:5000/santo' // Para probar el mensaje de erro

  useEffect(() => {
    // Renderizaloader
    setLoading(true)
    helpHttp()
      .get(url)
      .then((res) => {
        // console.log(res)
        // Si no hay errores
        if (!res.err) {
          // setDb(res)
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res })
          setError(null)
        } else {
          // setDb(null)
          dispatch({ type: TYPES.NO_DATA })
          setError(res)
        }
        // Esconde el loader
        setLoading(false)
      })
  }, [url])

  //Funciones para el CRUD
  // Crear un nuevo registro
  const createData = (data) => {
    // console.log(data)
    // Creacion del id
    data.id = Date.now()
    // Consulto la api, el content-type es depende de como este construida la API
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    }
    api.post(url, options).then((res) => {
      //console.log(res)
      if (!res.err) {
        // setDb([...db, res])
        dispatch({ type: TYPES.CREATE_DATA, payload: res })
      } else {
        setError(res)
      }
    })
  }
  // Actualizar un registro
  const updateData = (data) => {
    //http://localhost:5000/santos/1651617564001
    let endpoint = `${url}/${data.id}`
    // console.log(endpoint)
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    }
    api.put(endpoint, options).then((res) => {
      //console.log(res)
      if (!res.err) {
        // let newData = db.map((el) => (el.id === data.id ? data : el))
        // setDb(newData)
        dispatch({ type: TYPES.UPDATE_DATA, payload: res })
      } else {
        setError(res)
      }
    })
    // Busca el id y cuando lo enciuentre modifique ese dato
  }
  // Eliminar un registro
  const deleteData = (id) => {
    //Preguntar si realmente quiere eliminarlo
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    )

    if (isDelete) {
      //http://localhost:5000/santos/1651617564001
      let endpoint = `${url}/${id}`
      let options = {
        headers: { 'content-type': 'application/json' },
      }

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          // let newData = db.filter((el) => el.id !== id)
          // setDb(newData)
          dispatch({ type: TYPES.DELETE_DATA, payload: id })
        } else {
          setError(res)
        }
      })
    } else {
      return
    }
  }

  return (
    <div>
      <h2>CRUD APP</h2>
      <article className='grid-1-2'>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor='#dc3545'
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  )
}

export default CrudApi
