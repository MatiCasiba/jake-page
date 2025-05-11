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