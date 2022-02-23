import React, { useState } from 'react'

const Formularios = () => {
	// Version Simple
	// react recomienda hacer una variable de estado y asignarselo al input, tambbien se le debe asignar al input el evento onChange que sera el que manipule el estado.
	// const [nombre, setNombre] = useState('')
	// const [sabor, setSabor] = useState("")
	// const [lenguaje, setLenguaje] = useState("")
	// const [terminos, setTerminos] = useState(false)

	// const handleSubmit = e => {
	// 	e.preventDefault()
	// 	alert('El formulario se ha enviado')
	// }

	// return (
	// 	<>
	// 		<h2>Formularios</h2>
	// 		<form onSubmit={handleSubmit}>
	// 			<label htmlFor="nombre">Nombre:</label>
	// 			<input
	// 				type="text"
	// 				id="nombre"
	// 				name="nombre"
	// 				value={nombre}
	// 				onChange={(e => setNombre(e.target.value))}
	// 			/>
	// 			{/* Para que un input este check por default se utiliza la propiedad defaultChecked ya que checked bloquea el state*/}
	// 			<p>Elige tu sabor JS Favorito</p>
	// 			<input
	// 				type="radio"
	// 				id="vanilla"
	// 				name="sabor"
	// 				value="vanilla"
	// 				onChange={e => setSabor(e.target.value)}
	// 			/>
	// 			<label htmlFor="vanilla">Vanilla</label>
	// 			<input
	// 				type="radio"
	// 				id="react"
	// 				name="sabor"
	// 				value="react"
	// 				onChange={e => setSabor(e.target.value)}
	// 			/>
	// 			<label htmlFor="react">React</label>
	// 			<input
	// 				type="radio"
	// 				id="angular"
	// 				name="sabor"
	// 				value="angular"
	// 				onChange={e => setSabor(e.target.value)}
	// 				defaultChecked
	// 			/>
	// 			<label htmlFor="angular">Angular</label>
	// 			<input
	// 				type="radio"
	// 				id="vue"
	// 				name="sabor"
	// 				value="vue"
	// 				onChange={e => setSabor(e.target.value)}
	// 			/>
	// 			<label htmlFor="vue">vue</label>
	// 			<input
	// 				type="radio"
	// 				id="svelte"
	// 				name="sabor"
	// 				value="svelte"
	// 				onChange={e => setSabor(e.target.value)}
	// 			/>
	// 			<label htmlFor="svelte">Svelte</label>
	// 			{/* Select, tambien se pone un defaultSValue al select en vez de selected */}
	// 			<p>Elige tu lenguaje de programación favorito</p>
	// 			<select name="lengaje" onChange={e => setLenguaje(e.target.value)} defaultValue="go">
	// 				<option value="">- - -</option>
	// 				<option value="js">JavaScript</option>
	// 				<option value="php">PHP</option>
	// 				<option value="py">Python</option>
	// 				<option value="go" defaultSelected>GO</option>
	// 				<option value="rb">Ruby</option>
	// 			</select>
	// 			{/* Checkbox */}
	// 			<br />
	// 			<label htmlFor="terminos">Acepto los términos y condiciones</label>
	// 			<input
	// 				type="checkbox"
	// 				name="terminos"
	// 				id="terminos"
	// 				onChange={e => setTerminos(e.target.checked)}
	// 			/>
	// 			<br />
	// 			{/* Submit se le deba asignar al form el evento onSubmit*/}
	// 			<input type="submit" value="Enviar" />
	// 		</form>
	// 	</>
	// )

	// Version Avanzada
	const [form, setForm] = useState({})

	// Funcion que se le asigna a todo los eventos change que desee vincular a la variable formulario, los elementos deben tener el atributo name
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	// Para booleanos
	const handleChecked = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.checked,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		alert('El formulario se ha enviado')
	}

	return (
		<>
			<h2>Formularios</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="nombre">Nombre:</label>
				<input
					type="text"
					id="nombre"
					name="nombre"
					value={form.nombre}
					onChange={handleChange}
				/>
				{/* Para que un input este check por default se utiliza la propiedad defaultChecked ya que checked bloquea el state*/}
				<p>Elige tu sabor JS Favorito</p>
				<input
					type="radio"
					id="vanilla"
					name="sabor"
					value="vanilla"
					onChange={handleChange}
				/>
				<label htmlFor="vanilla">Vanilla</label>
				<input
					type="radio"
					id="react"
					name="sabor"
					value="react"
					onChange={handleChange}
				/>
				<label htmlFor="react">React</label>
				<input
					type="radio"
					id="angular"
					name="sabor"
					value="angular"
					onChange={handleChange}
					defaultChecked
				/>
				<label htmlFor="angular">Angular</label>
				<input
					type="radio"
					id="vue"
					name="sabor"
					value="vue"
					onChange={handleChange}
				/>
				<label htmlFor="vue">vue</label>
				<input
					type="radio"
					id="svelte"
					name="sabor"
					value="svelte"
					onChange={handleChange}
				/>
				<label htmlFor="svelte">Svelte</label>
				{/* Select, tambien se pone un defaultSValue al select en vez de selected */}
				<p>Elige tu lenguaje de programación favorito</p>
				<select name="lengaje" onChange={handleChange} defaultValue="go">
					<option value="">- - -</option>
					<option value="js">JavaScript</option>
					<option value="php">PHP</option>
					<option value="py">Python</option>
					<option value="go" defaultSelected>
						GO
					</option>
					<option value="rb">Ruby</option>
				</select>
				{/* Checkbox */}
				<br />
				<label htmlFor="terminos">Acepto los términos y condiciones</label>
				<input
					type="checkbox"
					name="terminos"
					id="terminos"
					onChange={handleChecked}
				/>
				<br />
				{/* Submit se le deba asignar al form el evento onSubmit*/}
				<input type="submit" value="Enviar" />
			</form>
		</>
	)
}

export default Formularios
