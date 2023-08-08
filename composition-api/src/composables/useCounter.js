import { ref } from "vue";

const useCounter = () => {
    
    const counter=ref(5)
    // const increase = () => {
    //     counter.value++
    // }

    // const decrease = () => {
    //     counter.value--
    // }

    return{
        counter,
        increase: () => counter.value++,
        decrease: () => counter.value--
    }
}

export default useCounter