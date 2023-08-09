import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue3-demo-32f47-default-rtdb.firebaseio.com'
})

export default journalApi