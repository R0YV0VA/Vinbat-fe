import { ACCESS_TOKEN } from '../redux/constants'
import { getCookie, setCookie, deleteCookie } from './cookie'

// 14 weeks in seconds
const STORE_AUTH_TOKEN_FOR = 8467200

export const getAccessToken = () => {
  return getCookie(ACCESS_TOKEN)
}

export const setAccessToken = (token) => {
  setCookie(ACCESS_TOKEN, token, STORE_AUTH_TOKEN_FOR)
}

export const removeAccessToken = () => {
  deleteCookie(ACCESS_TOKEN)
  sessionStorage.removeItem(ACCESS_TOKEN)
}
