//COMPONENTE
//Usamos JSX, y la compilación la hace Babel.
/* Después de compilar, nuestra aplicación se vería así:
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
} */

const ComponentesyJSX = () => {
                    //El componente se renderiza como una etiqueta div, que envuelve el contenido.
                    //Técnicamente, el componente se define como una función de JavasScript.
                    // () => (Función que no recibe ningún parámetro), asignándola a la variable App.
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  console.log('Hola desde el componente') //La función que define el componente puede contener cualquier tipo de código JavaScript.
  return (
    <div>
      <p>Hello world, it is {now.toString()}.</p>
      <p>{a} plus {b} is {a+b}</p>
    </div>                                //Al escribir JSX, tenemos que cerrar todas las etiquetas, al igual que en XML. P.EJ: <br> </br>
  )
}

export default ComponentesyJSX
