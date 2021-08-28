import axios from 'axios';

let config = {
    baseUrl: 'https://jsonplaceholder.typicode.com/users',
};
let axiosInstance = axios.create(config);

const getAxiosUsers = () => {
  return axiosInstance.get('');
};

const getAxiosUser = (id) => {
    return axiosInstance.get('/'+id);
};

const getPostOfUser = (id) => {
  return axiosInstance.get('/' + id + '/posts');
};

export {getAxiosUsers, getAxiosUser, getPostOfUser}
