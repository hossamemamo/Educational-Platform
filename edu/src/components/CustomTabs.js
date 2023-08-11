import * as React from 'react';

import { Typography ,Tabs,Tab,Box} from '@mui/material';
import { useFetchFilteredCoursesQuery } from '../store';
import CourseContainer from './CourseContainer';

function CustomTabs({params}) {



  const [value, setValue] = React.useState(10);

  const labels=params.map((item,key) => (
      <Tab key={item.id} label={<Typography variant='tabs'>{item.name}</Typography>}
      
      style={{
        fontWeight: 'bold',
        fontSize: '16px',
        textTransform: 'none',
        color: value === key ? 'green' : 'inherit',
        backgroundColor: value === key ? 'white' : 'transparent',
        borderRadius: value === key ? '20px' : '0',
        marginRight: '65px'
      }}

      />
    ));
    
    const {data,isLoading,isSuccess}=useFetchFilteredCoursesQuery(value);
    let coursesArray=[];
    if (isSuccess)
    {
        let courses_dict=data.data.courses;

        if(courses_dict) // if it have courses
        {
          for (const [, value] of Object.entries(courses_dict)) {
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
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%', // This will make the content take up the full viewport height
    }}
    >
      <Box sx={{ maxWidth: { xs: 320, sm: '70%' }, bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          style={{backgroundColor:"#F3F3F3"}}
          TabIndicatorProps={{
            style: { display: 'none' },
          }}
          TabScrollButtonProps={{
            style: { color: 'green' }, // Change this color to your desired green color
          }}
        >
        {labels}

        </Tabs>
    </Box>

    <Box >
      <CourseContainer courses={coursesArray}/>
    </Box>

    </Box>



      

);
}
export default CustomTabs;