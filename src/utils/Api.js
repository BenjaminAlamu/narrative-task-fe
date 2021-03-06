import axios from "axios";

const Api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  crossdomain: true,
  timeout: 120000,
});

Api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('narrative-token') || ''

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)

export default Api
