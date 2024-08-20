import { ipcMain } from 'electron'
import { database } from '../../../database'
import { User } from '../../../database/models'
import passwordHash from 'password-hash'
import moment from 'moment'
import { JwtToken } from '../utils'

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

      if (verifyPassword === true) {
        isExist.lastLogin.push(moment().format('MMMM Do YYYY, h:mm:ss a'))
        isExist.updatedAt = moment().format('MMMM Do YYYY, h:mm:ss a')
        const token = await JwtToken.sign(isExist._id)
        console.log('Password Matched')
        await isExist.save()
        event.reply('login-response', {
          success: true,
          message: 'Login successfull!!',
          data: JSON.stringify({
            name: isExist.name,
            role: isExist.role,
            lastLogin: isExist?.lastLogin,
            createdAt: isExist.createdAt,
            updatedAt: isExist.updatedAt,
            _id: isExist._id,
            token: token,
            phoneNumber: isExist.phoneNumber,
            email: isExist.email,
            username: isExist.username,
            dob: isExist.dob,
            age: isExist.age,
            gender: isExist.gender
          })
        })
      } else {
        event.reply('login-response', {
          success: false,
          message: 'Invalid credentials',
          data: {}
        })
      }
    } catch (error) {
      console.log(error)
      event.reply('login-response', {
        success: false,
        message: `Failed to login \n ${error.message}`,
        data: {}
      })
    }
  })
}
