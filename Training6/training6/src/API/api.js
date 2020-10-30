import axios from 'axios';


export const APIauthorize = (email, password) => {
    return axios({
        method: 'post',
        url: 'http://localhost:9000/login',
        data: {
          email,
          password
        }
    }).then(res => res)
    .catch(err => err);
};