import React, { createRef, useRef } from 'react'
// createref se usa para componentes de clase y no se debe usar en componentes funcionales

const Referencias = () => {
	// let refMenuBtn = useRef() Se usa para componentes de clase
	let refMenuBtn = useRef(),
		refMenu = useRef()

	console.log(refMenu, refMenuBtn) // es un objeto con el elemento current que se iguala a la referencia que si no se le hace referencia se iguala a undefine
	const handleToggleMenu = (e) => {
		// // sin referencias
		// const $menu = document.getElementById('menu')

		// 	if (e.target.textContent === 'Menú') {
		// 		e.target.textContent = 'Cerrar'
		// 		$menu.style.display = 'block'
		// 	} else {
		// 		e.target.textContent = 'Menú'
		// 		$menu.style.display = 'none'
		// 	}
		
			if (refMenuBtn.current.textContent === 'Menú') {
				refMenuBtn.current.textContent = 'Cerrar'
				refMenu.current.style.display = 'block'
			} else {
				refMenuBtn.current.textContent = 'Menú'
				refMenu.current.style.display = 'none'
			}
	}

	return (
		<>
			<h2>Referencias</h2>
			{/* // Menu de navegacion para ocultar y mostrar no se necesita el id con las ref*/}
			<button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
				Menú
			</button>
			{/* Simular un menu movil comienza oculto */}
			<nav id="menu" ref={refMenu} style={{ display: 'none' }}>
				<a href="#">sección 1</a>
				<br />
				<a href="#">sección 2</a>
				<br />
				<a href="#">sección 3</a>
				<br />
				<a href="#">sección 4</a>
				<br />
				<a href="#">sección 5</a>
			</nav>
		</>
	)
}

export default Referencias
