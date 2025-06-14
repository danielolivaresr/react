/*const Display = (props) => {
    return(
        <div>{props.counter}</div>
    )
}*/

/* Ya que el componente solo usa el campo counter de susprops, podemos simplificar el componente usando desustructuración:
const Display = ({counter}) => {
    return(
        <div>{counter}</div>
    )
}*/

//Ya que solo contiene la declaración return, podemos simplificar la función aún más:
const Display = ({counter}) => <div>{counter}</div>

export default Display