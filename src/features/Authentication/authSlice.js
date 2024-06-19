import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    currentUser: undefined,
    isLoading: false,
    error: null,
};

export const register = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:5000/merchmatrixapi/signup', {
                user: userData,
            });
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.errors);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:5000/merchmatrixapi/login', {
                user: userData,
            });
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.errors);
        }
    }
);

export const refreshToken = createAsyncThunk(
    'auth/refreshToken',
    async (_, thunkAPI) => {
        try {
            const refresh = localStorage.getItem("refreshToken") ?? ""
            const response = await axios.get('http://localhost:5000/merchmatrixapi/refresh', {
                headers: {
                    Authorization: `Bearer ${refresh}`
                }
            });
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.errors);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('accessToken')
    }      
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(refreshToken.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(refreshToken.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
            })
            .addCase(refreshToken.rejected, (state, action) => {
                state.isLoading = false;
                state.currentUser = null
                state.error = action.payload;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.currentUser = null
            })
    }
});

export default authSlice.reducer;

// Selector functions to get current user and token
export const selectCurrentUser = (state) => state.authentication.currentUser;
export const selectAuthLoading = (state) => state.authentication.isLoading;
export const selectAuthError = (state) => state.authentication.error;

// Usage example
// console.log(selectCurrentUser(store.getState()));
