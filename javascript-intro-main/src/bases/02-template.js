const nombre='Fernando'
const apellido="Devia"

const Completo = `${nombre} ${apellido}` // alt + 96

//console.log(`Resultado: ${5*2}`)

function getSaludo( nombre ){
    return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`)
