import { useFetchCourseDetailsQuery } from '../store';
import errimg from '../assets/404.png';
const useCoursesDetailData = (courseId) => {

    const {data,isSuccess}=useFetchCourseDetailsQuery(courseId);
    let Course;
    if(isSuccess)
    {
        Course={
            title:data.data.classified_product.title,
            description:data.data.classified_product.description,
            rating:data.data.final_rating_from_reviews,
            reviews:data.data.reviews_number,
            instructors:data.data.classified_product.instructors,
            sections_count:data.data.classified_product.sections_count,

            lecture_count:data.data.classified_product.sessions_count,
            assignments_count:data.data.classified_product.assignments.length,
            total_duration:data.data.classified_product.duration_in_hours,
            sections:data.data.classified_product.sections,

            reviews_list:data.data.reviews,
            image_url:data.data.classified_product.image_url?data.data.classified_product.image_url:errimg,
            price:data.data.price_after_discount,

            quizzes:data.data.classified_product.quizzes
        }

    }
    return { Course, isSuccess };
  };
  
export default useCoursesDetailData;
  