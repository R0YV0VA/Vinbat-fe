import axios from 'axios'
import debug from 'debug'
import _isEmpty from 'lodash/isEmpty'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

debug('API: %s', process.env.REACT_APP_API_URL)

api.interceptors.request.use(
  (config) => {
    const token = ''
    // get token func
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export const get = () =>
  api
    .get('url')
    .then((response) => response.data)
    .catch((error) => {
      debug('%s', error)
      throw _isEmpty(error.response.data?.message)
        ? error.response.data
        : error.response.data.message
    })
