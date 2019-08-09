import axios from 'axios';
var instance = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 10000,
})

function fetch(url) {
    return instance
    .get (url)
    .then (response => {
      return response.data;
    })
    .catch (error => {
      return error;
    });
};

export default apis = {
    PATH: {
       USER:'/users'
    },
    fetch
}