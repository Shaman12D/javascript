import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const counterStore = {
    namespaced: true,

    state,
    // state: () => ({
    //     count: 1,
    //     lastMutation: 'none',
    //     isLoading: false,
    //     lastRandomInt: 0,
    // }),
    mutations,
    //mutations{
    //     increment(state){
    //         state.count++
    //         state.lastMutation='increment'
    //     },
    //     incrementBy(state, val){
    //         state.count+=val
    //         state.lastMutation='incrementBy '+val
    //         state.lastRandomInt=val
    //     },
    //     setLoading(state, val){
    //         state.isLoading=val
    //         state.lastMutation='setLoading ' + val
    //     }
    // },
    
    actions,//actions:{
        // incrementRandom = async({commit})=>{
        //     commit('setLoading',true)
        //     const randomInt = await getRandomInt()
        
        //     commit('incrementBy', randomInt)
        //     commit('setLoading',false)
    // },

    getters,//:{
    //     squareCount(state){
    //         return state.count*state.count
    //     }
    // }
}

export default counterStore