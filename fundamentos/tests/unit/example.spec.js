describe('Example component', ()=>{
    test('Debe ser mayor a 10', ()=>{
      //Arreglar
      let value=10;

      //Estimulo
      value=value+2

      //Observar el resultado
      if (value>10) {
        //Salio todo bien
      } else {
        //Algo fallo
        expect (value).toBeGreaterThan(10)
      }
    })
})
