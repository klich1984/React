import { useState, useEffect } from 'react'

// Es una funcion que usaremos dentro del hook

export const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [isPending, setIsPending] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const getData = async (url) => {
			try {
				let res = await fetch(url)

				// Manipular el error
				if (!res.ok) {
					// eslint-disable-next-line no-throw-literal
					throw {
						err: true,
						status: res.status,
						statusText: !res.statusText ? 'Ocurrio un error' : res.statusText,
					}
				}

				let data = await res.json()
				// Actualizo variable de estado
				setIsPending(false)
				setData(data)
				setError({err: false})
			} catch (err) {
				setIsPending(true)
				setError(err)
			}
		}

		getData(url)
	}, [url])

	// Lo que retorna el hook personalizado.
	return { data, isPending, error }
}
