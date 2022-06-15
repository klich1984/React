import { createContext, useState } from 'react'

const LanguageContext = createContext()

const initialLanguage = 'es'

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

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage)
  // Select the language with the language state variable
  const [texts, setTexts] = useState(translation[language])
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

  const data = { texts, handleLanguage }

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}

export { LanguageProvider }
export default LanguageContext
