/*const Hello = (props) => {
    const bornYear = () => {                 //Expandir componente Hello para que adivine el año de nacimiento de la persona que recibe la bienvenida, función auxiliar
        const yearNow = new Date().getFullYear()
        return yearNow - props.age;
    }
    
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old.
            </p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}*/

//VERSIÓN CON DESESTRUCTURACIÓN DE PROPS, FORMA MÁS CÓMODA Y LEGIBLE DE ACCEDER A LAS PROPIEDADES DE UN OBJETO.
const Hello = ({name, age}) => {
    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - age
    }
        //const bornYear = () => new Date().getFullYear - age --SE PUEDE HACER EN UNA SOLA LÍNEA, YA QUE SOLO CONTIENE UNA INSTRUCCIÓN--

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old.
            </p>
            <p>So probably you were born in {bornYear()}</p>
        </div>
    )
}


export default Hello