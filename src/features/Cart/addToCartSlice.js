import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    currentCart: undefined,
    isLoading: false,
    error: null,
}

export const updateCart = createAsyncThunk(
    'cart/update',
    async (productData, thunkAPI) => {
        try {
            const access = localStorage.getItem("accessToken") ?? ""
            const response = await axios.post('http://127.0.0.1:5000/merchmatrixapi/addtocart', 
                {product: productData},

                {headers: {
                    Authorization: `Bearer ${access}`
                }}
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
        })
        .addCase(updateCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentCart = action.payload;
        })
        .addCase(updateCart.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default addToCartSlice.reducer