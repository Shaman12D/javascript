// import { owners } from './data/heroes.js'

import heroes from "../data/heroes";

// const [dc, marvel] = owners

// function getHerobyId(id){
//     return heroes.find((heroe)=>heroe.id===id)
// }

// const getHerobyId = (id) => {
//     return heroes.find((heroe)=>heroe.id===id)
// }

export const getHerobyId = (id) => heroes.find((heroe)=>heroe.id===id)

export const getHeroesByOwner = (owner) => heroes.filter(hero=>hero.owner===owner)

//Debe ir en el index
// import {getHerobyId,getHeroesByOwner} from './bases/08-import-export'

// console.log(getHerobyId(3))

// console.log(getHeroesByOwner('DC'));