import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1     //Definimos counter, que usaremos como prop en el componente App.


const root = ReactDOM.createRoot(document.getElementById('root')) //Creando el root de React, debe ser único.
                                                                     // Define un componente de React con el nombre App.
                                                                     
                                                                     // Para acceder al ID ROOT del HTML, hacemos uso de getElementById, utilizando el DOM.                                                             

const refresh = () => {
    root.render(<App counter={counter} />); // .render(<App />) renderiza su contenido dentro del elemento div, definido en HTML, que tiene como id 'root'.
};

refresh()
counter += 1
refresh()
counter += 1
refresh()
counter += 1
refresh()