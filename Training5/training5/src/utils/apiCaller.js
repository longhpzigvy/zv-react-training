import axios from 'axios';


export default function callApi(endpoint, method = 'GET', data){
    return axios({
        method,
        url: `http://localhost:9000/${endpoint}`,
        data
    })
}