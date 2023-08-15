import { useFetchCoursesQuery } from "../store";

const useCoursesData = () => {
  const { data: coursesData, isLoading: coursesLoading, isSuccess: coursesSuccess } = useFetchCoursesQuery();
  const coursesArray = [];

  if (coursesSuccess) {
    let courses_dict = coursesData.data.courses;
    let tempObj;

    for (const [key, value] of Object.entries(courses_dict)) {
      for (const [innerKey, innerValue] of Object.entries(value)) {
        tempObj = {
          course_id: innerValue.classified_product.course_id,
          img_url: innerValue.classified_product.image_url,
          title: innerValue.classified_product.title,
          review_count: innerValue.reviews_number,
          rating: innerValue.final_rating_from_reviews,
          instructors: innerValue.classified_product.instructors,
          description: innerValue.classified_product.description,
          price_after_discount: innerValue.price_after_discount,
          original_price: innerValue.original_price,
        };

        coursesArray.push(tempObj);
      }
    }
  }

  return { coursesArray, coursesLoading };
};

export default useCoursesData;
