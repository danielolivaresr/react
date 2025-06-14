                                            // Importamos el hook useState desde React para manejar el estado del componente
import { useState } from 'react'

                                            // Definimos un componente funcional llamado State
const State = () => {

                                            // Declaramos una variable de estado llamada 'counter' con valor inicial 0,
                                            // y una función 'setCounter' para actualizar su valor
   const [counter, setCounter] = useState(0)

                                            // Esta función se ejecuta después de 1 segundo (1000ms)
                                            // y aumenta el valor de 'counter' en 1
                                            // ⚠️ IMPORTANTE: Este setTimeout se ejecuta en cada renderizado,
                                            // lo cual puede generar muchos temporizadores y causar un comportamiento inesperado
   setTimeout(
    () => setCounter(counter + 1),
    10000000
   )

   console.log('rendering...', counter)     //Visualizar por consola los cambios de estado del contador

                                            // Retornamos un div que muestra el valor actual del contador
   return (
       <div>{counter}</div>
   )
}

                                            // Exportamos el componente para poder usarlo en otras partes de la aplicación
export default State