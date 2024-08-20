import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserDetails: (state, action) => {
      state.value = { ...action.payload }
    },
    updateUserDetails: (state, action) => {
      state.value = { ...state.value, ...action.payload }
    },
    deleteUserDetails: (state) => {
      state.value = {}
    }
  }
})

// Action creators are generated for each case reducer function
export const { addUserDetails, updateUserDetails, deleteUserDetails } = userSlice.actions

export default userSlice.reducer
