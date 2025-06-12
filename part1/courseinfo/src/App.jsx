import JS from './JS.jsx'
import Hello from './State.jsx'


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10, color: 'red' },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]
  
  parts.forEach(values => {   // Recorre el array parts y muestra por consola el objeto actual.
    console.log(values)
  })


  return (
    <div>
      <Header color='red' course={course} />
      <Content color='blue' parts={parts} />
      <Total color='green' parts={parts} />
      <JS />
      <Hello name='Ana' age='28'/>
    </div>
  )
}

const Header = ({ course, color }) => {
  return (
    <div>
      <h1 style={{color:color}}>{course}</h1>
    </div>
  )
}

const Content = ({ parts, color }) => {
  return (
    <div>
      {parts.map((part, index) => (                      //part objeto actual, index posición en el array.
        <p key={index} style={{color:color}}>{part.name} {part.exercises}</p> //Devuelve un párrafo con el contenido, se usa key={index} para que REACT identifique cada elemento de forma única (OBLIGATORIO AL USAR MAP EN JSX)
      ))}
    </div>
  )
}

const Total = ({ parts, color }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <p style={{color:color}}>Number of exercises {total}.</p>
  )
}
export default App