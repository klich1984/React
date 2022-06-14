# Funcionalidad

- pagina con cabeza cuerpo y pie y que cambiaentre modo claro y oscuro
- Manejar de sesión para mostrar un contenido o otro depende de si esta logeado o no y que sea multiidioma (es/en)

## Creacion de contexto

1. Crear una carpeta dentro de src que se llama context
2. Dentro de esa carpeta se crearan los contextos que se requieran en la app
3. Creamos el contexto con la funcion `createContext()`, Se suguiere que el nombre sea adecuado ej. `const ThemeContext = createContext()` y este se exporta de manera por defecto.
4. Crear un componente que sera el proveedor(wrapper) y que recibira como propiedad a `{children}`, que sera el que va a compartir con sus componentes hijos, este componente se encargara de realizar toda la logica, este componente se exporta de manera normal ej.: `const ThemeProvider = ({ children }) => {}`.
5. El componente creado anteriormente retornara un componente de react que retorna el `Provider` ej. `ThemeContext.Provider` y gracias a los hooks no se necesita el `Consumer`. Le pasamos los `{childrens}` y le compartimos las propiedades que se requieran en los hijos como un objeto para que seam destructurados.
6. En el componente donde se usara las propiedades del contexto se usara el Hook `useContext` y le pasaremos el contexto creado el cual debe ser tambien importado.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
