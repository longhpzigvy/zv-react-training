import axiosService from '../Commons/axiosService';
import {API_ENDPOINT} from '../Constants/index';

//localhost:9000/todos
const url = 'todos';

export const getList = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
}