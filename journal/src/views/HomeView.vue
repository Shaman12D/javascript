<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola mundo</h1>
    <button @click="goToDaybook" class="btn btn-primary">P</button>
    <button @click="goToDaybook" class="btn btn-secondary">S</button>
    <button @click="goToDaybook" class="btn btn-success">SU</button>
  </div>
</template>

<script>
  export default{
    methods:{
      goToDaybook(){
        this.$router.push({name: 'no-entry'})
      }
    }
  }
</script>