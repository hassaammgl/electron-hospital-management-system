import mongoose from 'mongoose'
import moment from 'moment'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  registeredAt: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm:ss a')
  },
  updatedAt: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm:ss a')
  },
  lastLogin: [
    {
      type: String,
      default: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  ]
})

const User = mongoose.model('User', userSchema)

export default User
