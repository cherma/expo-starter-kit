import axios from 'axios';

const http = axios.create({
  withCredentials: true,
  headers: {
    Accept: 'application/json',
  },
  maxContentLength: 1024 * 1024 * 20
});

/*http.interceptors.response.use(
  response => response,
  error => {
    if(error.response.status === 401) {
      if(!isAuthUrls())
        window.location.href = authPath.login;
    }
    return Promise.reject(error);
  }
);*/

export default http;