import React, { useState, useEffect } from 'react'
import Pokemon from '../pokemons/Pokemon'

const ApiHooks = () => {
	// Declaracion de propiedades
	const [pokemons, setPokemons] = useState([])

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
	// 							id: json.id * -1,
	// 							name: json.name,
	// 							avatar: json.sprites.front_default,
	// 						}

	// 						setPokemons((pokemons) => [...pokemons, pokemon])
	// 					})
	// 			})
	// 		})
	// }, [])

	useEffect(() => {
		let url = 'https://pokeapi.co/api/v2/pokemon'

		const getPokemons = async (url) => {
			let res = await fetch(url),
				json = await res.json()

			json.results.forEach(async (el) => {
				let res = await fetch(el.url),
					json = await res.json()

				console.log(json)
				let pokemon = {
					id: json.id * -1,
					name: json.name,
					avatar: json.sprites.front_default,
				}

				setPokemons((pokemons) => [...pokemons, pokemon])
			})
		}

		getPokemons(url)
	}, [])

	return (
		<div>
			<h2>Api Hooks</h2>
			{pokemons.map((pokemon) => (
				<Pokemon key={pokemon.id} name={pokemon.name} avatar={pokemon.avatar} />
			))}
		</div>
	)
}

export default ApiHooks
