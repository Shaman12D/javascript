import pokemonApi from "@/api/pokemonApi";

describe('Axios debe estar configurado correctamente', ()=>{
    test('pokemonApi',()=>{
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon/')
    })
})