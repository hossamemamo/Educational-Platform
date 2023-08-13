import CourseContainer from "../components/CourseContainer";
import Header from "../components/Header";
import Footer from '../components/Footer';
import { useFetchCoursesQuery } from "../store";

import {
    Box, Stack,Pagination
  } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import CardSkeleton from "../components/CourseSkeleton";

  

function SecondPage(){

    const renderedSkeleton=<Stack direction={'row'} spacing={5} justifyContent='center'>
    <CardSkeleton/>
    <CardSkeleton/>
    <CardSkeleton/>
    <CardSkeleton/>
    </Stack>;

    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll position when this page is navigated to
      }, []);
    
    const {data,isLoading,isSuccess}=useFetchCoursesQuery();
    const coursesArray=[];
    if (isSuccess)
    {
        let courses_dict=data.data.courses;
        let tempObj;
        for (const [key, value] of Object.entries(courses_dict)) {

            
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Box>
            <Header/>

            <Stack direction={'column'} spacing={10} paddingTop={20}>
                {isLoading?renderedSkeleton:<CourseContainer courses={paginatedArray[page-1]}/>}

                <Stack alignItems="center" >
                    <Pagination count={paginatedArray.length} size="large" page={page} onChange={handlePageChange}  />
                </Stack>
            </Stack>

            <Footer/>

        </Box>
    )
}

export default SecondPage;