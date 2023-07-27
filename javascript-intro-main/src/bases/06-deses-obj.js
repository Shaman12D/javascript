//desestructuracion de objetos
const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    power: 'Dinero'
}

const {age,name,codeName,power='no tiene poder'} = person

// console.log(name)
// console.log(age)
// console.log(codeName)
// console.log(power)

const createHero = ({name, age, codeName, power}) => ({id: 112254, name,age,codeName,power})

console.log(createHero(person))