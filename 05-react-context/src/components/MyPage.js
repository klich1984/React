import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const initialTheme = 'light'
const initialLanguage = 'es'

const translation = {
  es: {
    headerTitle: 'Mi aplicación SIN Context API',
    headerSubtitle: 'Mi cabecera',
    headerLight: 'Claro',
    headerDark: 'Oscuro',
    buttonLogin: 'Iniciar Sesión',
    buttonLogout: 'Cerrar Sesión',
    mainWelcome: 'Bienvenid@ invitad@',
    mainHello: 'Hola Usuari@',
    mainContent: 'Mi contenido principal',
    footerTitle: 'Mi pié de página',
  },
  en: {
    headerTitle: 'My application without Context API',
    headerSubtitle: 'My header',
    headerLight: 'Light',
    headerDark: 'Dark',
    buttonLogin: 'Login',
    buttonLogout: 'Logout',
    mainWelcome: 'Welcome Guest',
    mainHello: 'Hello User',
    mainContent: 'My main content',
    footerTitle: 'My footer',
  },
}

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme)
  const [language, setLanguage] = useState(initialLanguage)
  // Select the language with the language state variable
  const [texts, setTexts] = useState(translation[language])

  // console.log(texts)

  // theme change handling
  const handleTheme = (e) => {
    // console.log(e.target.value)
    if (e.target.value === 'light') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const handleLanguage = (e) => {
    if (e.target.value === 'es') {
      setLanguage('es')
      setTexts(translation.es)
    } else {
      setLanguage('en')
      setTexts(translation.en)
    }
  }

  return (
    <div className='my-page'>
      <Header
        theme={theme}
        texts={texts}
        handleTheme={handleTheme}
        handleLanguage={handleLanguage}
      />
      <Main theme={theme} texts={texts} />
      <Footer theme={theme} texts={texts} />
    </div>
  )
}

export default MyPage
