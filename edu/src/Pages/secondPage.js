import CourseContainer from "../components/CourseContainer";
import Header from "../components/Header";
import Footer from '../components/Footer';
import { useFetchCoursesQuery } from "../store";

import {
    Box, Stack, Typography,Pagination
  } from "@mui/material";
import { useState } from "react";

function SecondPage(){
    const {data,isLoading,isSuccess}=useFetchCoursesQuery();
    const coursesArray=[];
    if (isSuccess)
    {
        let courses_dict=data.data.courses;
        let tempObj;
        for (const [key, value] of Object.entries(courses_dict)) {

            // const newObj = {
            //     key: key,
            //     value: value,
            //     // You can add more properties if needed
            //   };
        
            
            for(const [innerKey, innerValue] of Object.entries(value))
            {
                tempObj = {
                    course_id:innerValue.classified_product.course_id,
                    img_url:innerValue.classified_product.image_url,
                    title:innerValue.classified_product.title,
                    review_count:innerValue.reviews_number,
                    rating:innerValue.final_rating_from_reviews,
                    instructors:innerValue.classified_product.instructors, //array of id and name and profile picture
                    description:innerValue.classified_product.description,
                    price_after_discount:innerValue.price_after_discount,
                    original_price:innerValue.original_price
                };

                coursesArray.push(tempObj);

            }
        }
    }



    const paginatedArray = [];
    const itemsPerPage=8;
    for (let i = 0; i < coursesArray.length; i += itemsPerPage) {
    const chunk = coursesArray.slice(i, i + itemsPerPage);
    paginatedArray.push(chunk);
    }
    

    const [page,setPage]=useState(1);
    const handlePageChange = (event,newPage)=>{
        setPage(newPage);
    };

    return (
        <Box>
            <Header/>
                <Stack direction={"column"} spacing={1} >
                    <CourseContainer courses={coursesArray}/>
                    <Pagination count={paginatedArray.length} size="small" page={page} onChange={handlePageChange} sx={{backgroundColor:'red'}} />
                </Stack>
            <Footer/>
        </Box>
    )
}

export default SecondPage;