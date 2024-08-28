import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'name',
  initialState: {
    value: 0,
  },
  reducers: {
    setUserDetails : (state , action) => {
        state.user = action.payload
        console.log("userDetails" , action.payload)

    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserDetails } = userSlice.actions

export default userSlice.reducer