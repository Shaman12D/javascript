import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter component', ()=>{

    let wrapper
    beforeEach(()=>{
        wrapper=shallowMount(Counter)
    })

    // test('Debe de hacer match con el snapshot', ()=>{
    //     const wrapper = shallowMount(Counter) 
    //     expect(wrapper.html()).toMatchSnapshot()
    // }

    test('Debe tener un valor por defecto (Counter)', ()=>{

        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('Counter')
    })

    test('El valor por defecto debe ser 100 en el p', ()=>{
        //const Tagsp = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()
        // expect(Tagsp[1].text()).toBe('100')
        expect(value).toBe('100')
    })

    test('debe de incrementar y decrementar el contador', async() => {
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click') 
        await decreaseBtn.trigger('click')
        const val = wrapper.find('[data-testid="counter"]').text()
        expect(val).toBe('101')
    })

    test('debe de establecer el valor por defecto', () => {
        const {start}  = wrapper.props()
        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)
    })

    test('debe de mostrar la prop title', () => {
        const wrapper=shallowMount(Counter, {
            props:{
                title: 'Hola mundo',
            }
        })

        expect(wrapper.find('h2').text()).toBe('Hola mundo')
    })


})