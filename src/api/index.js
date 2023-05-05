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

export const caseRequest = (props) => {
    return new Promise((resolve, reject) => {
        api.post('cases', {
            Username: props.username,
            Connection: props.connection,
            Message: props.message
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                resolve(error);
            })
    })
}

export const changePasswordRequest = (credentials) => {
  return new Promise((resolve, reject) => {
      api.put('users/change-password' ,{
          oldpassword: credentials.oldpassword,
          newpassword: credentials.newpassword
      })
          .then(response => {
              resolve(response);
          })
          .catch(error => {
              resolve(error);
          })
  })
}

export const loginNameRequest = (credentials) => {
  return new Promise((resolve, reject) => {
      api.put('users/change-login-name', {
          name: credentials.name,
          login: credentials.login
      })
          .then(response => {
              resolve(response);
          })
          .catch(error => {
              resolve(error);
          })
  })
}

export const loginRequest = (credentials) => {
  return new Promise((resolve, reject) => {
      api.post('auth/login', {
          login: credentials.login,
          password: credentials.password
      })
          .then(response => {
              resolve(response);
          })
          .catch(error => {
              resolve(error);
          })
  })
}

export const myAccountRequest = () => {
  return new Promise((resolve, reject) => {
      api.get('users/my-account',)
          .then(response => {
              resolve(response);
          })
          .catch(error => {
              resolve(error);
          })
  })
}

export const registerRequest = (credentials) => {
  return new Promise((resolve, reject) => {
      api.post('auth/register', {
          name: credentials.name,
          login: credentials.login,
          password: credentials.password
      })
          .then(response => {
              resolve(response);
          })
          .catch(error => {
              resolve(error);
          })
  })
}

export const resetPasswordRequest = (credentials) => {
  return new Promise((resolve, reject) => {
      api.put('auth/newpass', {
          login: credentials.login,
          password: credentials.password
      })
          .then(response => {
              resolve(response);
          })
          .catch(error => {
              resolve(error);
          })
  })
}