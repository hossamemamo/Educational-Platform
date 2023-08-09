import * as React from 'react';

import { Typography,Stack ,Tabs,Tab,Box} from '@mui/material';
import { useFetchFilteredCoursesQuery } from '../store';
import CourseContainer from './CourseContainer';

function CustomTabs({params}) {

  const [value, setValue] = React.useState(10);

  const labels=params.map((item) => (
      <Tab key={item.id} label={<Typography variant='tabs'>{item.name}</Typography>} />
    ));
    
    const {data,isLoading,isSuccess}=useFetchFilteredCoursesQuery(value);
    let coursesArray=[];
    if (isSuccess)
    {
        let courses_dict=data.data.courses;

        if(courses_dict) // if it have courses
        {
          for (const [key, value] of Object.entries(courses_dict)) {
                let tempObj;
                console.log(value);
                  tempObj = {
                      course_id:value.classified_product.course_id,
                      img_url:value.classified_product.image_url,
                      title:value.classified_product.title,
                      review_count:value.reviews_number,
                      rating:value.final_rating_from_reviews,
                      instructors:value.classified_product.instructors, //array of id and name and profile picture
                      description:value.classified_product.description,
                      price_after_discount:value.price_after_discount,
                      original_price:value.original_price
                  };
  
                  coursesArray.push(tempObj);
  
          }
  
        }
    }


    coursesArray=coursesArray.slice(0, 4); // take only first 4
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack direction={'column'} spacing={3}>
      <Box sx={{ maxWidth: { xs: 320, sm: 2000 }, bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          style={{backgroundColor:"#F3F3F3"}}
          indicator={{background:"#FFFFFF"}}
        >
        {labels}

        </Tabs>
      </Box>
      <Box >
        <CourseContainer courses={coursesArray}/>
      </Box>

      
    </Stack>
  );
}
export default CustomTabs;