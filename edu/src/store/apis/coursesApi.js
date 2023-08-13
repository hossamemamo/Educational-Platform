import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const coursesApi= createApi({
    reducerPath:'courses',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://apistaging.inclass.app/api/v1'
    }),
    endpoints(builder){
        return{
            fetchCategories : builder.query({ //fetching courses categories
                query:()=>{
                    return{
                        url:'/classes/1/subjects',
                        method:'GET'
                    };
                }
            })
            ,fetchCourses : builder.query({ //fetching courses categories
                query:()=>{
                    return{
                        url:'/courses',
                        params:{
                            'page[number]':1,
                            'school_class_id':1
                        },
                        method:'GET'
                    };
                }
            })
            ,fetchFilteredCourses:builder.query({ //fetching courses categories
                query:(topic)=>{
                    return{
                        url:'/courses_filtering',
                        params:{
                            'page[number]':1,
                            'page[size]':10,
                            'filter[class_id]':1,
                            'filter[subject_id]':topic
                        },
                        method:'GET'
                    };
                }
            })
            ,fetchCourseDetails:builder.query({ //fetching courses categories
                query:(course_id)=>{
                    return{
                        url:`/courses/${course_id}`,
                        method:'GET'
                    };
                }
            })
        };
    }
    
});

export const {useFetchCategoriesQuery,useFetchCoursesQuery,useFetchFilteredCoursesQuery,useFetchCourseDetailsQuery}=coursesApi;
export {coursesApi};