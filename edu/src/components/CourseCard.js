// import { useFetchCategoriesQuery } from "../store";

import * as React from 'react';

import {Card,
    CardMedia,
    CardContent,
    Typography,
    Rating,
    Stack,
    Button,
    Box
} from '@mui/material';



import { Link } from '@mui/material';
import { useState } from 'react';
import ShoppingCart from '../assets/cart.png';
import errimg from '../assets/404.png';
function CourseCard({course}){
 

    const {img_url,title,review_count,rating,instructors,description,price_after_discount,original_price}=course;



    const instructorNames = instructors.map(instructor => instructor.name+' , ');
    const mergedNames = instructorNames.join(' ');


    const [showMore,setShowMore]=useState(false);

    const handleShowMore =()=>{
        setShowMore(!showMore);
    };

    const showMoreButton=showMore?"See Less":"See More";

    const renderedDescription=showMore?description:(description.length <= 35 ? description : (description.substr(0, 35) + "..."));

    const renderedTitle=(title.length <= 57 ? title : (title.substr(0, 57) + "..."))
    return(
            <Card sx={{ maxWidth: 272 }}>

            <CardMedia
        component="img"
        height="194"
        image={img_url||errimg}
        alt="Paella dish"
      />

      <CardContent>
        <Stack direction='column' spacing={1}>
        {/* cardheader */}
        <Typography variant='cardHeader' fontWeight={1000} style={{ wordWrap: "break-word",minHeight:40 }}>{renderedTitle}</Typography>
        {/* card rating */}
        <Stack direction="row"  spacing={1} >
            <Typography variant='rating' fontWeight={1000} color={"#F7B52E"} >{rating}</Typography>
            <Rating name="size-small" value={rating} size="small" precision={0.5} readOnly />
            <Typography variant='rating'> ({review_count})  </Typography>
        </Stack>

        {/* instructors */}
        <Typography variant='instructors' style={{minHeight:30 }}>
            {mergedNames.length <= 45 ? mergedNames : (mergedNames.substr(0, 45) + "...")}

        </Typography>

        <Typography variant='instructors' style={{ wordWrap: "break-word" ,minHeight:30}} >
            {renderedDescription}
            {description.length>35 ?<Link onClick={handleShowMore}> 
                    {showMoreButton}
                </Link>:null}

        </Typography>

        <Stack direction='row' spacing={3}>
            <Typography variant='pricing' fontWeight={1000}>
                $ {price_after_discount}
            </Typography>
            <Typography  variant='pricing'  style={{textDecoration: 'line-through'}}>
                $ {original_price}
            </Typography>
        </Stack>


        <Stack direction='row' spacing={3}>

            <Button variant="outlined" style={{height: 34,width:168 ,color:"#28A19C",borderColor:"#28A19C"}} >
                <Typography variant='pricing'>
                    Enroll Now
                </Typography>
            </Button>

            <Button variant="outlined" style={{borderColor:"#28A19C"}}>

            <Box 
                        component="img"
                        sx={{
                        height: 23,
                        width:23,
                            }}
                        alt="Your logo."
                        src={ShoppingCart}
                    />

            </Button>

        </Stack>




        </Stack>
      </CardContent>


            </Card>
    )

}

export default CourseCard;