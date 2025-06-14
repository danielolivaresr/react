import { useState } from 'react'
import Display from './Display.jsx'
import Button from './Button.jsx'

const EventsHandler = () => {
    const [counter, setCounter] = useState(0)
    console.log('rendering with counter value', counter)

    //Controladores de evento
    const increaseByOne = () => {
        console.log('increasing, value before', counter)
        setCounter (counter +1)
    }
    const setToZero = () => {
        console.log('resetting to zero, value before', counter)
        setCounter (0)
    }
    
    const decreaseByOne = () => {
        console.log('decreasing, value before', counter)
        setCounter (counter - 1)
    }


    return (
        <div>
            <Display counter={counter} />
            <Button onClick={increaseByOne} text='Más'/>
            <Button onClick={decreaseByOne} text='Menos'/>
            <Button onClick={setToZero} text='Reiniciar' />

            {/* 
            <button onClick={increaseByOne}>Más</button>
            <button onClick={decreaseByOne}>Menos</button>
            <button onClick={SetToZero}>Reiniciar</button>
            <button onClick ={() => setCounter(counter+1)}>Más</button>
            <button onClick ={() => setCounter(counter-1)}>Menos</button>
            <button onClick ={() => setCounter(0)}>Reiniciar</button>
            */}
        </div>

    )
}

export default EventsHandler