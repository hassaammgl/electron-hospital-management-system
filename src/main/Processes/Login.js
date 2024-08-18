import { ipcMain } from 'electron'
import { database } from '../../../database'
import { User } from '../../../database/models'

export const login = () => {
  return ipcMain.on('login', async (event, data) => {
    console.log(data)
    const { email, phoneNumber, password, username } = data

    try {
      await database.connectDb()
      const isExist = await User.findOne({ email, phoneNumber, password, username })
      console.log(isExist)

      if (
        isExist.username === username &&
        isExist.email === email &&
        isExist.phoneNumber === phoneNumber
      ) {
        event.reply('login-response', {
          success: true,
          message: 'Login successfull!!',
          data: {
            role: isExist.role,
            name: isExist.name,
            email: isExist.email,
            phoneNumber: isExist.phoneNumber,
            username: isExist.username,
            dob: isExist.dob,
            age: isExist.age,
            gender: isExist.gender
          }
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
