import { ipcRenderer } from 'electron'

export const api = {
  signup: async (data) => {
    const { password, confirmPassword } = data

    if (password !== confirmPassword) {
      return {
        success: false,
        message: 'Password not matched'
      }
    }

    return new Promise((resolve, reject) => {
      ipcRenderer.send('signup', data)
      ipcRenderer.on('signup-response', (event, res) => {
        if (res.success) {
          resolve(res)
        } else {
          reject(res)
        }
      })
    })
  },
  login: async (data) => {
    return new Promise((resolve, reject) => {
      ipcRenderer.send('login', data)
      ipcRenderer.on('login-response', (event, res) => {
        if (res.success) {
          resolve(res)
        } else {
          reject(res)
        }
      })
    })
  }
}
