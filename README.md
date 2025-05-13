Link de la página:

# Jake Page
Haré una página acerca del mejor amigo que uno puede tener en este mundo, un perro, más que una mascota, un integrante más en mi familia que ahora espero que se encuentre en una mejor vida. Su nombre era Jake, espero que esté descansando en paz

## Constants
Dentro de esta carpeta se encontraráel archivo menuItems.js:

### menuItems.js
dentro de este archivo se encontrará los mismo nombres que los otros archivos de la carpeta pages y su ruta:
```js
const menuItems = [
    {id: 1, nombre: 'Inicio', ruta: '/'},
    {id: 2, nombre: 'Me', ruta: '/me'},
    {id: 3, nombre: 'Contacto', ruta: '/contacto'}
]

export default menuItems
```

## Hook
Dentro de la carpeta hook usaré códigos que lo voy a poder volver a utilizar en algún otro archivo, siempre y cuando importe el hook que necesite, en este caso tengo un hook para los títulos de cada parte de la página. Ejemplo: si me encuentro en inicio, en la pestaña de la página debe decir "Jakepage - Inicio"

### useTitulo.jsx

```js
import { useEffect } from "react"

const useTitulo = (textoTitulo = 'Sin título') => {
  return (
    useEffect(()=> {
        document.title = `Jakepage - ${textoTitulo}`
    }, [])
  )
}

export default useTitulo
```

## Routes 
En la carpeta de routes se encontrará mi archvio Rutas.jsx, haré uso de react router, para esto lo tuve que instalar en mi proyecto:

* React Router:
```sh
npm i react-router
```

* importo el react router dentro de Rutas.jsx para darle uso
```js
import { useRoutes } from "react-router"
```

### Rutas.jsx

```js
import { useRoutes } from "react-router"
import Inicio from "../pages/inicio/Inicio"
import Me from "../pages/sobre-jake/Me"
import Contacto from "../pages/contacto/Contacto"

const Rutas = () => {
  const hookRutas = useRoutes(
    [
        {
            path: '/',
            element: <Inicio />
        },
        {
            path: '/me',
            element: <Me />
        },
        {
            path: '/contacto',
            element: <Contacto />
        }
    ]
  )
}

export default Rutas
```
Como notas, se importaron archivos de una carpeta pages, dentro de esta carpeta se encuentra Inicio.jsx (tenbdrá el contenido inicial de la página), Me.jsx (en esta parte habrá una sección con mas información de Jake) y Contacto.jsx (este conendrá los medios por donde me puedes contactar). Esto está hecho con la finalidad de que podamos navegar entre estas secciones de la página, es necesario.

