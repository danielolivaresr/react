import { useState } from 'react'

const EventsHandler = () => {
    const [counter, setCounter] = useState(0)

   /* const handleClick = () => {
        console.log('clicked')
    }*/
    const increaseByOne = () => setCounter (counter +1)
    const SetToZero = () => setCounter (0)
    const decreaseByOne = () => setCounter (counter - 1)


    return (
        <div>
            <div>{counter}</div>
            <button onClick={increaseByOne}>Más</button>
            <button onClick={decreaseByOne}>Menos</button>
            <button onClick={SetToZero}>Reiniciar</button>
            {/* 
            <button onClick ={() => setCounter(counter+1)}>Más</button>
            <button onClick ={() => setCounter(counter-1)}>Menos</button>
            <button onClick ={() => setCounter(0)}>Reiniciar</button>
            */}
        </div>

    )
}

export default EventsHandler