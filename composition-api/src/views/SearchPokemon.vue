<template>
    <h1>Buscar pokémon:</h1>
    <form @submit.prevent="onSubmit">
        <input type="number" 
        placeholder="Número del pokémon" 
        v-model="pokemonId"
        ref="txtSearchID"
        >
    </form>
    <br/>
    <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from "vue-router";
export default {
    setup(){
        const router = useRouter()

        const pokemonId = ref(1)
        const txtSearchID=ref()

        onActivated(()=>{
            // txtSearchID.value.focus()
            txtSearchID.value.select()
        })

        return{
            pokemonId,
            txtSearchID,
            onSubmit: () =>{
                console.log('pokemon a buscar:',pokemonId.value);
                router.push({name: 'pokemon-id', params: {id: pokemonId.value}})
            }
        }
    }
}
</script>

<style>

</style>