import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {user: null, token: null},
    reducers: {
        setCredentials: (state, action) => {
            const {user, accessToken} = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state) => {
            state.user = null
            state.token = null
        }
    }
})

export const {setCredentials, logOut} = authSlice.actions

export default authSlice.reducer

// selector function to get current user and token
export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.token