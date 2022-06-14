import { useState } from 'react'
import { ThemeProvider } from '../context/ThemeConrtext'
import FooterContext from './FooterContext'
import HeaderContext from './HeaderContext'
import MainContext from './MainContext'

const initialLanguage = 'es'
const initialAuth = null

const translation = {
  es: {
    headerTitle: 'Mi aplicación CON Context API',
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
    headerTitle: 'My application with Context API',
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

const MyPageContext = () => {
  const [language, setLanguage] = useState(initialLanguage)
  // Select the language with the language state variable
  const [texts, setTexts] = useState(translation[language])
  const [auth, setAuth] = useState(initialAuth)

  // console.log(texts)

  // Language change handling
  const handleLanguage = (e) => {
    if (e.target.value === 'es') {
      setLanguage('es')
      setTexts(translation.es)
    } else {
      setLanguage('en')
      setTexts(translation.en)
    }
  }
  // Sesion change handling
  const handleAuth = (e) => {
    if (auth) {
      setAuth(null)
    } else {
      setAuth(true)
    }
  }

  return (
    <div className='my-page'>
      <ThemeProvider>
        <HeaderContext
          texts={texts}
          auth={auth}
          handleLanguage={handleLanguage}
          handleAuth={handleAuth}
        />
        <MainContext texts={texts} auth={auth} />
        <FooterContext texts={texts} />
      </ThemeProvider>
    </div>
  )
}

export default MyPageContext
