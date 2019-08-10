import axios from 'axios';
import constants from '../utils/constants'
var instance = axios.create({
    baseURL: constants.serverAPIURL,
    timeout: constants.SERVER_TIMEOUT,
})

function fetch(url) {
    console.log(url,'url')
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
       USER:'/users',
       REPO:'/repos/'
    },
    fetch
}