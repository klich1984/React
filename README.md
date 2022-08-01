# Proyectos React

## Conceptos Basicos

Primer proyecto de react utilizando la libreria Create React App [react-basicos](react-basicos)

## Router con React Router

Creacion de router utilizando la libreria React Router [react-rutas](react-rutas)

`Nota`

- El manejo de rutas con esta libreria no son buenas para el CEO ya que se manejan como una SPA

## Desarrollo y desplegado App React

- Desarrollo de una App y desplegarla en hosting y otras plataformas desde la terminal.
- Framework MATERIAL - UI: Son componentes de React, enfocado a la interactividad y no al diseño

`Nota:` Como la Api lyrics dejo de funcionar, se utilizo a modo de prueba la API de [jikan.moe](https://jikan.docs.apiary.io/#).
Falta Organizar los nombres de variables para la API nueva

APIS:

- [theaudiodb.com](https://theaudiodb.com/api_guide.php)
- [lyrics.ovh](https://lyrics.ovh/)
  App que busca canciones y la letra de la cancion consumiendo dos Apis, usando MATERIAL-UI.

Despliegue de proyecto en:

[Netlify](https://vigorous-benz-d1e187.netlify.app/)

-En githubPages

- Primero instalar dependencia de githubPages como dependencia de desarrollo (`npm i -gh-pages -D`)
- Segundo en el package.json agregar una propiedad llamada `"homepage": "./"`
- Agregar dos comandos en scripts `"predeploy": "npm run build"` y `"deploy": "gh-pages-d build"`
  [githubPages](https://klich1984.github.io/React/)

y desplegada en servidor compartido(Subiendo el contenido por ftp)

[App en servidor](https://carlosum369.com/build/#/)

- Para este ultimo se debe tener en cuenta la importacion de archivos ya que por defecto el build las toma desde la raiz del servidor y no desde la carpeta actual. `(./)`
  Para solucionarlo se agrega en el package.json una propiedad llamada `"homepage": "./"`

- Ademas se debe activar la funcionalidad para tener las rutas mas amigables con HASrouter en App.js
