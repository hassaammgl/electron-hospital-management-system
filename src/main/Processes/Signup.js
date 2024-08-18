import { ipcMain } from 'electron'
import { database } from '../../../database'
import { User } from '../../../database/models'

export const signup = () => {
  return ipcMain.on('signup', async (event, data) => {
    console.log(data)
    const { role, name, email, phoneNumber, password, username, dob, age, gender } = data
    try {
      await database.connectDb()
      if (role === 'Admin') {
        const isAdminExist = await User.findOne({ role: 'Admin' })
        console.log(isAdminExist)

        if (isAdminExist) {
          event.reply('signup-response', {
            success: false,
            message: 'Admin already exists try for Patient please..'
          })
          return
        }
      }

      const newUser = User({
        role,
        name,
        email,
        phoneNumber,
        password,
        username,
        dob,
        age,
        gender
      })
      console.log(newUser)
      await newUser.save()
      console.log('User saved')
      event.reply('signup-response', {
        success: true,
        message: `User ${role} added successfully`
      })
    } catch (error) {
      console.log(error)
      event.reply('signup-response', {
        success: false,
        message: `Failed to add user \n ${error.message}`
      })
    }
  })
}
