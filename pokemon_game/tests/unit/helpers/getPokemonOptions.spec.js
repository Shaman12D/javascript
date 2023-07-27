import getPokemonsOptions, { getPokemons, getPokemonsNames } from "@/helpers/getPokemonOptions"

describe('getPokemonOptions helpers', ()=>{
    test('debe de regresar un arreglo de números', ()=>{
        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[499]).toBe(500)
    })

    test('debe de retornar un arreglo de 4 elementos con nombres de pokemons', async ()=>{
        const pokemons=await getPokemonsNames([1,2,3,4])
        expect(pokemons).toStrictEqual([
            {id: 1, name: 'bulbasaur'},
            {id: 2,name: 'ivysaur'},
            {id: 3,name: 'venusaur'},
            {id: 4,name: 'charmander'}
        ])
    })

    test('getPokemonOptions debe de retornar un arreglo mezclado', async ()=>{
        const pokemons = await getPokemonsOptions()

        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            {
                id: expect.any(Number), name: expect.any(String)
            },
            {
                id: expect.any(Number), name: expect.any(String)
            },
            {
                id: expect.any(Number), name: expect.any(String)
            },
            {
                id: expect.any(Number), name: expect.any(String)
            }
        ])

    })
})