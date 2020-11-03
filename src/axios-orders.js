import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dopeburgers-2268e.firebaseio.com/'
});

export default instance;