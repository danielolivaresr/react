const JS = () => {

    console.log('--- JAVASCRIPT FROM COMPONENT ---')
    // Desestructuración de arrays. Asigna el primer elemento a first, el segundo a second y el resto a rest.
    const t = [1, 2, 3, 4, 5]
    const [first, second, ...rest] = t  // El operador ...rest captura el resto de los elementos del array en un nuevo array llamado rest.
    console.log(first, second)          // Muestra los dos primeros elementos, en este caso 1 y 2
    console.log(rest)                   // Muestra el resto del array, en este caso [3,4,5]

    console.log('--- MAP ---')
    const array = [1,2,3]
    const m1 = array.map(value => value * 2) // Utiliza el método map para crear un nuevo array m1, multiplicando cada elemento del array original por 2.
    console.log(array)
    console.log(m1)                          // Muestra el nuevo array m1, que contiene [2, 4, 6]

    console.log('--- OBJECTS ---')           // Los valores de las propiedades de un objeto pueden ser de cualquier tipo, como oenteros, strings, arrays, objetos...
    const object1 = {
        name: 'Daniel',
        age: 27,
        education: 'DAW',
    }

    const object2 = {
        name: 'Fullstack web dev',
        level: 'intermediate',
        size: 5,
    }

    const object3 = {
        name: {
            first: 'Daniel',
            last: 'Ramos',
        },
        califications: [9, 10, 8],
        department: 'IT',
    }
    console.log(object1, object2, object3)

    console.log('--- FUNCTIONS ---')
const sum = (a, b) => { // Función que recibe dos parámetros a y b, los muestra por consola y devuelve su suma.
    console.log(a)
    console.log(b)
    return a + b
}

const result = sum(1, 2)    // Llama a la función sum con los argumentos 1 y 2, y almacena el resultado en la variable result.
console.log(result)         // Muestra el resultado de la suma, que es 3.

// Si solo hay un parámetro, se pueden omitir los paréntesis al definir la función.
const square = p => p * p   // Función que recibe un parámetro p y devuelve su cuadrado.

const arr = [1, 2, 3]
const arrSquared = arr.map(p => p*p) // Utiliza el método map para crear un nuevo array arrSquared, que contiene los cuadrados de cada elemento del array original arr.
console.log(arrSquared)             // Muestra el nuevo array arrSquared, que contiene [1, 4, 9]

console.log('--- CLASES ---')
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const Persona1 = new Person('Daniel', 27)
Persona1.greet()

const Persona2 = new Person('Ana', 28)
Persona2.greet()

}


export default JS