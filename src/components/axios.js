import axios from 'axios'

// axios({
//   url: 'http://127.0.0.1/url',
//   method: 'GET'
// }).then(res => {
//   return res;
// })
export function request(config) {
    const instrance = axios.create({
      baseURL: 'http://10.203.71.4:8089',
      // baseURL: 'http://127.0.0.1:8089',
      timeout: 5000
    })
    return instrance(config)
}