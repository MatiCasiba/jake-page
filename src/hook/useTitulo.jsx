import { useEffect } from "react"

const useTitulo = (textoTitulo = 'Sin título') => {
  return (
    useEffect(()=> {
        document.title = `Jakepage - ${textoTitulo}`
    }, [])
  )
}

export default useTitulo