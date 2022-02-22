import React, { useState, useEffect } from 'react'
import Pokemon from '../pokemons/Pokemon'

const AjaxHooks = () => {
	const [pokemons, setPokemons] = useState([])
	// Peticion fetch
	// useEffect(() => {
	// 	let url = 'https://pokeapi.co/api/v2/pokemon'

	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			// console.log(json)
	// 			json.results.forEach((pokemon) => {
	// 				fetch(pokemon.url)
	// 					.then((res) => res.json())
	// 					.then((json) => {
	// 						console.log(json)
	// 						let pokemon = {
	// 							id: json.id,
	// 							name: json.name,
	// 							avatar: json.sprites.front_default,
	// 						}

	// 						// Funcion para Modificar el estado de la variable hook, y en formato de arrowFunction para actualizar el estado. Destructura lo que trae la variable pokemon + el pokemon que traes desde la peticion
	// 						setPokemons((pokemons) => [...pokemons, pokemon])
	// 					})
	// 			})
	// 		})
	// }, [])

	// Peticion async await, La funcion useEffect no se vuelve asincrono ya que se considera un antipatron (una mala practica) desde la documentación de react
	useEffect(() => {
		// Creo una funcion para volverla asincrona
		const getPokemons = async (url) => {
			let res = await fetch(url),
				json = await res.json()

			// console.log(json)
			json.results.forEach(async (el) => {
				let res = await fetch(el.url),
					json = await res.json()
				//console.log(json)
				let pokemon = {
					id: json.id,
					name: json.name,
					avatar: json.sprites.front_default,
				}

				// Funcion para Modificar el estado de la variable hook, y en formato de arrowFunction para actualizar el estado. Destructura lo que trae la variable pokemon + el pokemon que traes desde la peticion
				setPokemons((pokemons) => [...pokemons, pokemon])
			})
		}

		getPokemons('https://pokeapi.co/api/v2/pokemon')
	}, [])

	return (
		<>
			<h2>Peticiones Asincronas en Hooks</h2>
			{pokemons.length === 0 ? (
				<h3>Cargando...</h3>
			) : (
				pokemons.map((el) => (
					<Pokemon key={`pokemon-${el.id}`} name={el.name} avatar={el.avatar} />
				))
			)}
		</>
	)
}

export default AjaxHooks
