<template>
    <div>
        <h1>Aprendiendo Slots</h1>
        <button @click="openModal">Abrir Modal</button>

        <Modal v-if="isOpen" @on:close="closeModal" title="Hola mundo">
           <!-- <h2>Titulo del modal</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
           <button>Salir</button>  -->
           <template v-slot:header>
                <h2>Titulo del modal</h2>
           </template>
           <hr>
           <template v-slot:footer >
                <button @click="closeModal">Salir</button>
           </template>
           <template v-slot:body >
                <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h6>
           </template>
           <template v-slot:exposed="{newTitle}">
                <h2>{{ newTitle }}</h2>
           </template>
        </Modal>
    </div>
</template>
<script>
import {ref} from 'vue'
import Modal from '../components/Modal.vue'

export default {
    components: {Modal},
    setup(){
        const isOpen = ref(false)
        return{
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        }
    }
}
</script>
<style scoped>
    
</style>