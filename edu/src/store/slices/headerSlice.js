import {createSlice} from '@reduxjs/toolkit';

const headerSlice = createSlice({
    name:'header',
    initialState:{
        loginOpen:false
    },
    reducers:{
        setLoginOpen(state,action){
            state.loginOpen = !state.loginOpen;
        }
    }
});


export const {setLoginOpen} = headerSlice.actions;
export const headerReducer = headerSlice.reducer;