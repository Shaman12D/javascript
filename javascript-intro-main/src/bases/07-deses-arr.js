//Desestructuración de arreglos
const caracaters = ['Goku', 'Vegeta', 'Trunks', 'Goten']

const [ g, v, t, go='no tiene valor'] = caracaters

const returnArray = ([letters, numbers]) => {
    return [letters, numbers]
}

const [letters, numbers] = returnArray(['XYZ',123])

console.log(letters,numbers)