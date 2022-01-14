import React from 'react'
import { useFetch } from '../Hooks/useFetch'

const HooksPersonalizados = () => {
	// let url = 'https://pokeapi.co/api/v2/pokemon',
	let url = 'https://jsonplaceholder.typicode.com/users',
	// let url = 'https://pokeapi.co/api/v2/pokemons', // Para verificar el error
		{ data, isPending, error } = useFetch(url)

	console.log(useFetch())
	return (
		<div>
			<h2>Hooks Persolaizados</h2>
			<h3>{JSON.stringify(isPending)}</h3>
			<h3>
				<mark>{JSON.stringify(error)}</mark>
			</h3>
			<h3>
				<pre style={{ whiteSpace: "pre-wrap" }}>
					<code>
						{JSON.stringify(data)}
					</code>
				</pre>
			</h3>
		</div>
	)
}

export default HooksPersonalizados
