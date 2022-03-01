import React from 'react'
import './Estilos.css'

const Estilos = () => {
	let myStyles = {
		borderRadius: ".5rem",
		margin: "2rem auto",
		maxWidth: "50%"
	}

	return (
		<section className='estilos'>
			<h2>Estilos CSS en React</h2>
			<h3 className='bg-react'>Estilos en hoja CSS externa</h3>
			<h3 className='bg-react' style={{borderRadius: ".25rem", margin: "1rem"}}>Estilos en linea (atributo style</h3>
			<h3 className='bg-react' style={myStyles}>Estilos en linea</h3>
			<h3 className='bg-react' style={myStyles}>
				Agregando Normalize con
				<br />
				<code>@import-normalize;</code>
			</h3>
		</section>
	)
}

export default Estilos