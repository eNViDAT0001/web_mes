//https://api.publicapis.org/entries

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState= {
    loading: false,
    product:[],
    error: '',
}
/*
export const fetchTestApi = createAsyncThunk('api/fetchAPI',() =>{
    return axios
    .get('https://api.publicapis.org/entries')
    .then((response) =>response.data)
})
*/
export const seeListProductPreview = createAsyncThunk('api/product',() =>{

})
const productSlice = createSlice({
    name:'product',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(seeListProductPreview.pending,(state) =>{
            state.loading=true
        })
        builder.addCase(seeListProductPreview.fulfilled, (state,action) =>{
            state.loading= false
            state.entries = action.payload
            state.error= ''
        })
        builder.addCase(seeListProductPreview.rejected,(state,action) =>{
            state.loading = false
            state.entries = []
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer