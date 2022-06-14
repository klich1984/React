import React from 'react'

const Header = ({ theme, handleTheme }) => {
  return (
    <header className={theme}>
      <h2>Mi aplicación SIN contex API</h2>
      <h3>Mi Cabecera</h3>
      <select name='language' id=''>
        <option value='es'>ES</option>
        <option value='en'>EN</option>
      </select>
      <input
        type='radio'
        name='theme'
        id='light'
        onClick={handleTheme}
        value='light'
      />
      <label htmlFor='light'>Claro</label>
      <input
        type='radio'
        name='theme'
        id='dark'
        onClick={handleTheme}
        value='dark'
      />
      <label htmlFor='dark'>Oscuro</label>
      {/* Simular comportamiento de inicio de sesion */}
      <button>Iniciar Sesión</button>
    </header>
  )
}

export default Header
