// EstadoComplejo.jsx
import { useState } from 'react'

const ComplexState = () => {
  // Estado simple con múltiples useState
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  // Alternativa: estado complejo en un solo objeto
  const [clicks, setClicks] = useState({ left: 0, right: 0 })

  // Manejadores usando spread operator
  const handleLeftClick = () => 
    setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () => 
    setClicks({ ...clicks, right: clicks.right + 1 })

  return (
    <div>
      <h2>Estado separado:</h2>
      <p>Left: {left}</p>
      <button onClick={() => setLeft(left + 1)}>Left</button>
      <button onClick={() => setRight(right + 1)}>Right</button>
      <p>Right: {right}</p>

      <h2>Estado en objeto:</h2>
      <p>Left: {clicks.left}</p>
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      <p>Right: {clicks.right}</p>
    </div>
  )
}

export default ComplexState