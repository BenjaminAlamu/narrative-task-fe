import axios from "axios";

const Api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:5693/api/v1',
  // baseURL:
  //   "https://views-app-dev-be.herokuapp.com/",
  crossdomain: true,
  timeout: 120000,
});

Api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('views-token') || ''

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
