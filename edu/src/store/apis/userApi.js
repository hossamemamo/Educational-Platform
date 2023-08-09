import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const userApi= createApi({
    reducerPath:'user',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://apistaging.inclass.app/api/v1/user'
    }),
    endpoints(builder){
        return{
            logIn : builder.mutation({ //fetching courses categories
                query:(userData)=>{
                    return{
                        url:'/login',
                        body:{
                            user:userData,
                            device: {
                                "uid": "68c7c64",
                                "fcm_token": "il"
                            }
                        },
                        method:'POST'
                    };
                }
            }),
        };
    }
    
});

export const {useLogInMutation}=userApi;
export {userApi};