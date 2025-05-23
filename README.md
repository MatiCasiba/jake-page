Link de la página:

# Jake Page
Haré una página acerca del mejor amigo que uno puede tener en este mundo, un perro, más que una mascota, un integrante más en mi familia que ahora espero que se encuentre en una mejor vida. Su nombre era Jake, espero que esté descansando en paz

## Components
Dentro de esta carpeta se encontrará los componente que voy a usar para esta página, los archivos están organizados en distintas carpetas. En la carpeta components tengo las carpetas footer, header, navbar y spinner. Cada uno contiene archivos jsx y scss.

### Header
En la carpeta header se encontrará los archivos Header.jsx y Header.scss (la estructura del encabezado y su estilo)

#### Header.jsx:
```js
import './Header.scss'
import Navbar from "../navbar/Navbar"
import SearchBar from "../navbar/SearchBar"

const Header = () => {
  return (
    <>
      <header className="main-header">
        <input type="checkbosx" id="menu" />
        
        <Navbar />
        <SearchBar />

      </header>
    </>
  )
}

export default Header
```
Dentro del archivo importe su estilo, Navbar.jsx y SearchBar.jsx con la finalidad de que se vieran dentro de este componete y que esté organizado mi código, para no tener todos los códigos escritos dentro de Header.jsx, decido separarlos en otros componentes y despues ir exportando.

### Navbar
En la carpeta navbar se encontrarán los componetes Navbar.jsx - NavItem.jsx y SearchBar.jsx que luegos serán utilizados en el componete Header.jsx

#### Navbar.jsx
```js
import menuItems from "../../constants/menuItems"
import NavItem from "./NavItem"

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        # las clases lo hago de forma BEM que me es útil para escalar estilos
        <ul className="nav-bar__nav-list">
          {
            menuItems.map((item)=> (
              <NavItem item={item} key={item.id} />
            ))
          }
        </ul>
      </nav>
    </>
  )
}

export default Navbar
```
Dentro de este archivo importo el menuItems (contiene los datos del menú), me traigo también NavItem, este es un componente que renderiza cada ítem de forma individual.

* ¿Que hay dentro de este componente?
Navbar devuelve una estructura semántica de navegación (nav con una lista ul), hago uso de .map() sobre menuItems para iterar y renderizar un componente NavItem por cada ítem. Le paso el objeto item como prop y uso item.id como key (es una buena práctica en React para optimizar el renderizado de listas, por eso lo realicé de esta forma)

#### NavItem.jsx

```js
import { NavLink } from "react-router"

const NavItem = ({item}) => {
  return (
    <>
      <li className="nav-bar__nav-item">
        <NavLink to={item.ruta} className="nav-bar__nav-link">
          {item.nombre}
        </NavLink>
      </li>
    </>
  )
}

export default NavItem
```
Dentro de este archivo hago uso de NavLink de react router, este componente me permite crear enlaces que reconocen cuál está activo. El componente NavItem, va a recibir una prop llamada item (un objeto con nombre y ruta), renderiza un listado que contiene un NavLink, dentro de este tengo:
* to={item.ruta} que define la URL de navegación.
* item.nombre es el texto que se muestra
* también verás que contiene un className que es para estilo

#### SearchBar.jsx
En este archivo estaré armando la estructura de la barra de navegación, osea donde podrás escribir y buscar, en este caso buscaré imagenes con nombres que asignaré en las imagenes. 
```js

const SearchBar = () => {
  return (
    <>
      <div className="search-bar"> # Contenedor de todo el buscador

        <div className="search-bar__logo-container">
          <img src="..." alt="logo jake" className="search-bar__logo-img" />
        </div> # un contenedor para un logo

        <form action="#" className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__form-label">
            <img className="search-bar__logo-search" src="..." alt="logo del bucador" />
          </label>
          <input type="search" id="busqueda" className="search-bar__form-search" />
          <button type="submit" className="search-bar__form-submit">Buscar</button>
        </form> # acá se encontrará la barra buscadora

        <div className="menu-toogle">
          <label htmlFor="" className="menu-toogle__label">
            <span className="menu-toogle__top"></span>
            <span className="menu-toogle__mid"></span>
            <span className="menu-toogle__bottom"></span>
          </label>
        </div> # un contenedor donde habrá un menu, este se mostrará solo para dispositivo moviles

      </div>
    </>
  )
}

export default SearchBar
```

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
* id: es un identificard único (importante para las keys en React)
* nombre: el texto que se va a mostrar en el navegador
* ruta: tiene la URL a la que debe navegar

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

