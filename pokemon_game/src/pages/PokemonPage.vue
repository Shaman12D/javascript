<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>¿Quién es ese pokémon?</h1>
        <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon"/>
        <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/>
        <h2>{{ message }}</h2>
        <template v-if="showAnswer" >
            <button class="fade-in" @click="newGame">
                Nuevo Juego
            </button>
        </template>
    </div>
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
                pokemonArr: [],
                pokemon: null,
                showPokemon: false,
                showAnswer: false,
                message:''
            }
        },
        methods: {
            async mixPokemonArray(){
                this.pokemonArr = await getPokemonOption()

                const rndInt = Math.floor(Math.random() * 4)
                this.pokemon = this.pokemonArr[rndInt]
            },
            checkAnswer(selectedId){
                this.showPokemon = true
                this.showAnswer=true

                if (selectedId===this.pokemon.id){
                    this.message=`Correcto, ${this.pokemon.name}`
                } else{
                    this.message=`Oops, era ${this.pokemon.name}`
                }
            },
            newGame(){
                this.showPokemon= false,
                this.showAnswer= false,
                this.pokemonArr = [],
                this.message='',
                this.pokemon = null
                this.mixPokemonArray()
            }
        },
        mounted(){
            this.mixPokemonArray()
        }
    }
</script>

<style>

</style>