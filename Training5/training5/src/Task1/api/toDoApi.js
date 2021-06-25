import axiosClient from './axiosClient';

const productApi = {
  
  // get(id) {
  //   const url = `/todos/${id}`;
  //   return axiosClient.get(url);
  // },


  get() {
    const url = `/todos`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/todos';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/todos/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/todos/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
