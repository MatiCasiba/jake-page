Link de la página:

# Jake Page
Haré una página acerca del mejor amigo que uno puede tener en este mundo, un perro, más que una mascota, un integrante más en mi familia que ahora espero que se encuentre en una mejor vida. Su nombre era Jake, espero que esté descansando en paz

## Hook
Dentro de la carpeta hook usaré códigos que lo voy a poder volver a utilizar en algún otro archivo, siempre y cuando importe el hook que necesite, en este caso tengo un hook para los títulos de cada parte de la página. Ejemplo: si me encuentro en inicio, en la pestaña de la página debe decir "Jakepage - Inicio"

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
