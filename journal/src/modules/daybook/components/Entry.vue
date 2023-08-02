<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({name:'entry',params:{id:entry.id}})">
        <div class="entry-title d-flex">
            <span>{{ day }}</span>
            <span>{{ month }}</span>
            <span>{{ yearDay }}</span>
        </div>
    </div>

    <div class="entry-description">
        {{ shortText}}
    </div>
</template>

<script>
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
    
export default{
        props:{
            entry:{
                type: Object,
                required: true
            }
        },
        computed:{
            shortText(){
                return(this.entry.text.length>130)
                ? this.entry.text.substring(0,130)+'...'
                : this.entry.text
            },
            day(){
                const date = new Date(this.entry.date)
                return date.getDate()
            },
            month(){
                const date = new Date(this.entry.date)
                return months[date.getMonth()]
            },
            yearDay(){
                const date = new Date(this.entry.date)
                return `${date.getFullYear()}, ${days[date.getDay()]}`
            }
        }
    }
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid blueviolet;
    transition: 0.2s all ease-in;
}

.entry-description{
    font-size: 12px;
}
</style>