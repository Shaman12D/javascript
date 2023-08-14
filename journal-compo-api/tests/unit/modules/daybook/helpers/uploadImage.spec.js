import cloudinary from 'cloudinary'
import axios from 'axios'

import uploadImage from '@/modules/daybook/helpers/uploadImage'

cloudinary.config({
    cloud_name: 'djbohatni',
    api_key: '732775947524588',
    api_secret: 'Y08xb5h6sFgEXWa5mJVjGTWD0BA'
})


describe('Pruebas en el uploadImage ', () => {
    
    test('debe de cargar un archivo y retornar el url', async( done ) => {
        
        const { data } = await axios.get('https://res.cloudinary.com/djbohatni/image/upload/v1691005106/qhyrdyuexoocbukfuua6.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([ data ], 'foto.jpg')

        const url = await uploadImage( file )

        expect( typeof url ).toBe('string')


        // Tomar el ID
        const segments = url.split('/')
        const imageId = segments[ segments.length - 1 ].replace('.jpg','')
        cloudinary.v2.api.delete_resources( imageId, {}, () => {
            done()
        })

        
    })
    

})



