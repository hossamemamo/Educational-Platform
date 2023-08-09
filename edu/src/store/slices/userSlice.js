import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name:'user',
    initialState:{
        loading: false,
        userInfo: {}, // for user object
        // userToken: null, // for storing the JWT
        error: null, //for error message
        success: false, // for monitoring the registration process.
    },
    reducers:{}
});


export const userReducer = userSlice.reducer;