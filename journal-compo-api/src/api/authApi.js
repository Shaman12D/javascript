import axios from "axios";

const authApi = axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key: 'AIzaSyCSwes-2yFKEg3L8s1ExnwLpNstcUf_Hio'
    }
})

export default authApi