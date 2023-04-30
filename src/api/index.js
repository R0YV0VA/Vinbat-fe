import axios from 'axios'
import _isEmpty from 'lodash/isEmpty'
import { getAccessToken } from '../utils/accessToken'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export const getIsLogined = () =>
  api
    .get('users/is-logged')
    .then((response) => response)
    .catch((error) => {
      throw _isEmpty(error?.message)
        ? error.data?.message
        : error.message
    })
