import { ipcMain } from 'electron'
import { database } from '../../../database'
import { User } from '../../../database/models'
import passwordHash from 'password-hash'
import moment from 'moment'

export const login = () => {
  return ipcMain.on('login', async (event, data) => {
    console.log(data)
    const { email, phoneNumber, password, username } = data

    try {
      await database.connectDb()
      const isExist = await User.findOne({ email, phoneNumber, username })
      console.log('user is exist or ', isExist)

      const verifyPassword = passwordHash.verify(password, isExist?.password)
      console.log('verifyPassword = ', verifyPassword)

      isExist.lastLogin.push(moment().format('MMMM Do YYYY, h:mm:ss a'))
      isExist.updatedAt = moment().format('MMMM Do YYYY, h:mm:ss a')
      if (verifyPassword === true) {
        console.log('Password Matched')
        await isExist.save()
        event.reply('login-response', {
          success: true,
          message: 'Login successfull!!'
        })
      } else {
        event.reply('login-response', {
          success: false,
          message: 'Invalid credentials'
        })
      }
    } catch (error) {
      console.log(error)
      event.reply('login-response', {
        success: false,
        message: `Failed to login \n ${error.message}`
      })
    }
  })
}
