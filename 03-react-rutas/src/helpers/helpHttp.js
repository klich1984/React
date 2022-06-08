export const helpHttp = () => {
  // Metodo privado
  const customFetch = (endpoint, options) => {
    // Abort controller= al hacer una petición y no obtener respuesta abortar la petición
    const defaultHeader = {
      accept: 'application/json',
    }

    const controller = new AbortController()
    options.signal = controller.signal

    // Si no viene metodo en las cabeceras le asigno por defecto el GET
    options.method = options.method || 'GET'
    // Si vienen cabeceras las agrego a las cabeceras por default y si no tiene asigno las cabeceras por defecto
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader
    // Si las options traen body le hacemos un Parsear en una cadena de texto, si no trae(GET) la colocamos en false
    options.body = JSON.stringify(options.body) || false
    // si el body es falso (no se puede enviar un body en false o vacio) lo elimino del objeto
    if (!options.body) delete options.body

    // console.log(options)
    // Activar el abort Controller
    setTimeout(() => {
      controller.abort()
    }, 15000)

    // Peticion Fetch
    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || '00',
              statusText: res.statusText || 'Ocurrio un error',
            })
      )
      .catch((err) => err)
  }
  // Metodo Publico
  const get = (url, options = {}) => customFetch(url, options)
  // Metodo Publico
  const post = (url, options = {}) => {
    options.method = 'POST'
    return customFetch(url, options)
  }
  // Metodo Publico
  const put = (url, options = {}) => {
    options.method = 'PUT'
    return customFetch(url, options)
  }
  // Metodo Publico
  const del = (url, options = {}) => {
    options.method = 'DELETE'
    return customFetch(url, options)
  }

  return {
    get,
    post,
    put,
    del,
  }
}
