import Hello from './Hello.jsx'

const App = (props) => {
  const {counter} = props

  return (
    <div>{counter}
    <Hello name='Daniel' age='28' />
    </div>
  )
}

export default App