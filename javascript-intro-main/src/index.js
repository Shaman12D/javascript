// console.log('Inicio')

// new Promise( (resolve, reject) => {
//     console.log('cuerpo de la promesa')
//     resolve('Promsea resuelta')
// }).then(console.log)
// .catch(console.log)

// console.log('Fin')

import {getHerobyId} from '@/bases/08-import-export'

const getHerobyIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const hero = getHerobyId(id)

            if(hero){
                resolve(hero)
            } else {
                reject('Heroe no existe')
            }

            resolve(hero)
        }, 1000);
    });
}

getHerobyIdAsync(3)
.then(h=>console.log(`El heroe es: ${h.name}`))
.catch(console.log)