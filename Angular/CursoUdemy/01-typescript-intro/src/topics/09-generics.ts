export function whatsMyType<T> ( argument: T ): T {
    // Tratar no usar la propiedad "any"
    // La propiedad "T" lo que hace es que: Recibe cualquier tipo de dato pero después de recibirlo hace que cambie el tipo de ese parámetro

    return argument
}

let amIString = whatsMyType<string>('Hola Mundo')
let amINumber = whatsMyType<number>(100)
let amIArray = whatsMyType<number[]>([1,2,3,4])

console.log(amIString.split(' '))
console.log(amINumber.toFixed)
console.log(amIArray.join('-'))
