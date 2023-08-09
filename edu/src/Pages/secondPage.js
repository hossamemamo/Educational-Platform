import CourseContainer from "../components/CourseContainer";
import Header from "../components/Header";
import Footer from '../components/Footer';
import { useFetchCoursesQuery } from "../store";

import {
    Box, Stack, Typography
  } from "@mui/material";

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

    return (
        <Box>
            <Header/>

            <Box sx={{paddingTop:15}}>
                <CourseContainer courses={coursesArray}/>
            </Box>


            <Footer/>

        </Box>
    )
}

export default SecondPage;