<template>
  <div class="home">
    <h1>ref vs reactive</h1>
    <h1>{{ ironman }}</h1>
    <h1>{{ hulk }}</h1>

    <button @click="changeIronman">Ironman</button>
    <button @click="changeHulk">Hulk</button>

    <h3> Ironman: {{ ironmanIsAlive }}</h3>
    <h3> Hulk: {{ hulkIsAlive }}</h3>

    <button @click="changeStatus">Cambiar Status</button>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref, reactive} from 'vue'

export default {
  name: 'HomeView',
  components: {
    
  },
  setup(){
    const ironman = ref({name: 'Tony', age: 50})
    const hulk = reactive({name: 'Bruce', age: 50})

    const ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
    }

    return{
      ironman,
      hulk,

      hulkIsAlive,
      ironmanIsAlive,
      changeStatus,

      changeIronman:()=>{
        ironman.value.name='Tony Stark'
        ironman.value.age = 55
      },
      changeHulk:()=>{
        hulk.name='Bruce Banner'
        hulk.age=45
      }
    }
  }
}
</script>
