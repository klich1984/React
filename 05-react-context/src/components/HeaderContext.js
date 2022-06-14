import { useContext } from 'react'
import ThemeContext from '../context/ThemeConrtext'

const HeaderContext = ({ texts, handleLanguage, auth, handleAuth }) => {
  // Destructuramos las variables del contextop creado
  const { theme, handleTheme } = useContext(ThemeContext)

  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select name='language' onChange={handleLanguage}>
        <option value='es'>ES</option>
        <option value='en'>EN</option>
      </select>
      <input
        type='radio'
        name='theme'
        id='light-context'
        onClick={handleTheme}
        value='light'
      />
      <label htmlFor='light-context'>{texts.headerLight}</label>
      <input
        type='radio'
        name='theme'
        id='dark-context'
        onClick={handleTheme}
        value='dark'
      />
      <label htmlFor='dark-context'>{texts.headerDark}</label>
      {/* Simular comportamiento de inicio de sesion */}
      <button onClick={handleAuth}>
        {auth ? texts.buttonLogout : texts.buttonLogin}
      </button>
    </header>
  )
}

export default HeaderContext
