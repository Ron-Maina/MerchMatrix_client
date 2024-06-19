import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    currentCart: [],
    isLoading: false,
    error: null,
    success: false
}

export const updateCart = createAsyncThunk(
    'cart/update',
    async (productData, thunkAPI) => {
        try {
            const access = localStorage.getItem("accessToken") ?? ""
            const response = await axios.post('http://127.0.0.1:5000/merchmatrixapi/addtocart', 
                { product: productData },
                {
                    headers: {
                        Authorization: `Bearer ${access}`
                    }
                }
            )
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data.errors)
        }
    }
)

const addToCartSlice = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(updateCart.pending, (state) => {
                state.isLoading = true;
                state.error = null;
                state.success = false
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentCart = action.payload;
                state.success = true
            })
            .addCase(updateCart.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.success = false
            })
    }
})

export const selectSuccess = (state) => state.addToCart.success;
export const selectError = (state) => state.addToCart.error;


export default addToCartSlice.reducer
