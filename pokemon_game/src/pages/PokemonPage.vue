<template>
    <h1>¿Quién es ese pokémon?</h1>
    <PokemonPicture :pokemonId="4" :showPokemon="true"/>
    <PokemonOptions :pokemons="pokemonArr"/>
</template>

<script>
    import PokemonPicture from '@/components/PokemonPicture'
    import PokemonOptions from '@/components/PokemonOptions'

    import getPokemonOption from '@/helpers/getPokemonOptions'

    // console.log(getPokemonOption())

    export default {
        components: {PokemonPicture, PokemonOptions},
        data(){
            return{
                pokemonArr: []
            }
        },
        methods: {
            async mixPokemonArray(){
                this.pokemonArr = await getPokemonOption()
            }
        },
        mounted(){
            this.mixPokemonArray()
        }
    }
</script>

<style>

</style>