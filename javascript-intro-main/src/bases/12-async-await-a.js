const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('Tenemos un valor en la promesa')
            reject('Reject en miPromesa')
        },1000);
    })
}

const medirTiempoAsync = async() => {
    try {
        console.log('Inicio');
    
        const respuesta = await miPromesa()
        console.log(respuesta)
    
        console.log('Fin');
    
        return 'Fin de medir el tiempo async'
    } catch (error) {
        //return 'catch en medirTiempoAsync'
        throw 'Error en medirTiempoAsync'
    }

}

medirTiempoAsync()
    .then(valor => console.log('Then Exitoso', valor))
    .catch(err=>console.log('Error:',err))