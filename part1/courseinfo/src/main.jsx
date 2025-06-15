import ReactDOM from 'react-dom/client'
import ComplexState from './complexstate/ComplexState.jsx'

//let counter = 1     //Definimos counter, que usaremos como prop en el componente App.


ReactDOM.createRoot(document.getElementById('root')).render(<ComplexState />) //Creando el root de React, debe ser único.
                                                                     // Define un componente de React con el nombre App.
                                                                     
                                                                     // Para acceder al ID ROOT del HTML, hacemos uso de getElementById, utilizando el DOM.                                                             

/* const refresh = () => {
    root.render(<App counter={counter} />); // .render(<App />) renderiza su contenido dentro del elemento div, definido en HTML, que tiene como id 'root'.
}; */

/* setInterval(() => {
    refresh()
    counter +=1
}, 1000) */