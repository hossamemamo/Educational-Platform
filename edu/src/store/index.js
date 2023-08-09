import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { coursesApi } from "./apis/coursesApi";
import { userApi } from "./apis/userApi";

import {
    headerReducer,
    setLoginOpen
} from './slices/headerSlice';



const store = configureStore({
    reducer:{
        header:headerReducer,
        [coursesApi.reducerPath]:coursesApi.reducer,
        [userApi.reducerPath]:userApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat([coursesApi.middleware,userApi.middleware]);
    }
});
setupListeners(store.dispatch);
export {useFetchCategoriesQuery,useFetchCoursesQuery,useFetchFilteredCoursesQuery} from './apis/coursesApi';

export {useLogInMutation} from './apis/userApi';

export {
    store,
    setLoginOpen
};

