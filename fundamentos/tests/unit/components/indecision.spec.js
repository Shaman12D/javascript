import { shallowMount } from '@vue/test-utils'
import Indecision from "@/components/Indecision.vue";

describe('Indecision components' ,()=>{
    let wrapper
    let clgSpy

    global.fetch=jest.fn(()=>Promise.resolve({
        json: () => Promise.resolve({
            'answer': 'yes',
            'forced': false,
            'image': 'https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif'
        })
    }))

    beforeEach(()=>{
        wrapper=shallowMount(Indecision)

        clgSpy = jest.spyOn(console, 'log')

        jest.clearAllMocks()
    })

    test('Toma de pruebas con indecision',()=>{
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('escribir en el input no debe de disparar nada (console.log)', async()=>{        
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
        
        const input = wrapper.find('input')
        await input.setValue('hola mundo')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()

        // console.log(wrapper.log)
    })

    test('escribir el simbolo de "?" debe de disparar el getAnswer', async()=>{        
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('hola mundo?')

        // expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalled()
    })

    test('pruebas en getAnswer', async()=>{
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img');

        expect(img.exists()).toBeTruthy();
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/13-c3082a998e7758be8e582276f35d1336.gif')
        expect(wrapper.vm.answer).toBe('Si')
    })

    test('pruebas en getAnswer - Fallo en el API', async()=>{
        // Todo: fallo en el Api

        fetch.mockImplementationOnce(() => Promise.reject('API is down'))

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar del API')
    })
})