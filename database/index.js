import mongoose from 'mongoose'

export const database = {
  connectDb: async () => {
    await mongoose
      .connect('mongodb://localhost:27017', {
        dbName: 'hospital-management-system-hsm'
      })
      .then(() => {
        console.log('connected to db')
        return {
          success: true,
          message: 'connected to db'
        }
      })
      .catch((err) => {
        return {
          success: false,
          message: `failed to connect to db \n ${err.message}`
        }
      })
  },
  disconnectDb: async () => {
    await mongoose.disconnect().then(() => {
      console.log('disconnected from db')
      return {
        success: true,
        message: 'disconnected from db'
      }
    })
  }
}
