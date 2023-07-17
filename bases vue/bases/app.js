const app = Vue.createApp({
    // template: `
    //     <h1>Hola mundo</h1>
    //     <p>{{ !true ? 'Activo' : 'Inactivo' }}</p>
    //     <p>Desde app.js</p>
    // `

    data() {
        return {
            message: 'Hola mundo desde app.js',
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote(){
            console.log('Hola mundo')
            this.author = 'SD Dickson'

            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    },
})

app.mount('#App')