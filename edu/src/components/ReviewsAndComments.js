
import {
    Box, Stack,Typography,Rating,LinearProgress
  } from "@mui/material";

function ReviewsAndComments({Course,isSuccess}){

    if(isSuccess)
    {

    console.log(Course);
    const renderedComments=Course.reviews_list.map((review)=>{
        return(
            <Box key={review.product_review_id}>
                <Stack direction={'column'} spacing={1}>
                    <Rating value={review.rating} readOnly/>
                    <Stack direction={'row'} spacing={2}>
                        <Typography variant='small' fontWeight={1000}>
                            {review.user.name}
                        </Typography>
                        <Typography variant='small'>
                            {review.date}
                        </Typography>
                        
                    </Stack>
                    <Typography variant='small' paddingTop={1}>
                            {review.comment}
                    </Typography>

                </Stack>
            </Box>
        )
    });

    let reviewCounts = Array(5).fill(0);

    for (const [, value] of Object.entries(Course.reviews_list)){
        reviewCounts[value.rating-1]=reviewCounts[value.rating-1]+1;
    }   


    return(
        <Box>
        <Typography variant='big' fontWeight={1000}>Reviews</Typography>

<Stack direction={'row'} paddingTop={4} spacing={80} paddingBottom={10}>
        <Box sx={{width:'80%'}}>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <Typography fontSize={50}>{Course.rating}</Typography>
                <Stack direction={'column'}>
                    <Rating precision={0.5} value={Course.rating} readOnly/>
                    <Typography variant='medium'>{Course.reviews} Reviews</Typography>
                </Stack>
            </Stack>

            <Stack direction={'column'} spacing={1}>
                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <Typography variant='small' fontWeight={1000}>5 Stars</Typography>
                    <Box width={'70%'}>
                        <LinearProgress variant="determinate" value={Course.reviews===0?0:Math.round(reviewCounts[4]/Course.reviews)*100} sx={{backgroundColor: '#F1F1F1','& .MuiLinearProgress-bar': {backgroundColor: '#F7B52E'}}}/>
                    </Box>    

                    <Typography variant='small' fontWeight={1000}>{Course.reviews===0?0:Math.round(reviewCounts[4]/Course.reviews)*100}</Typography>
                </Stack>

                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <Typography variant='small' fontWeight={1000}>4 Stars</Typography>
                    <Box width={'70%'}>
                    <LinearProgress variant="determinate" value={Course.reviews===0?0:Math.round(reviewCounts[3]/Course.reviews)*100} sx={{backgroundColor: '#F1F1F1','& .MuiLinearProgress-bar': {backgroundColor: '#F7B52E'}}}/>
                    </Box>    

                    <Typography variant='small' fontWeight={1000}>{Course.reviews===0?0:Math.round(reviewCounts[3]/Course.reviews)*100}</Typography>
                </Stack>

                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <Typography variant='small' fontWeight={1000}>3 Stars</Typography>
                    <Box width={'70%'}>
                    <LinearProgress variant="determinate" value={Course.reviews===0?0:Math.round(reviewCounts[2]/Course.reviews)*100} sx={{backgroundColor: '#F1F1F1','& .MuiLinearProgress-bar': {backgroundColor: '#F7B52E'}}}/>
                    </Box>    

                    <Typography variant='small' fontWeight={1000}>{Course.reviews===0?0:Math.round(reviewCounts[2]/Course.reviews)*100}</Typography>
                </Stack>

                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <Typography variant='small' fontWeight={1000}>2 Stars</Typography>
                    <Box width={'70%'}>
                    <LinearProgress variant="determinate" value={Course.reviews===0?0:Math.round(reviewCounts[1]/Course.reviews)*100} sx={{backgroundColor: '#F1F1F1','& .MuiLinearProgress-bar': {backgroundColor: '#F7B52E'}}}/>
                    </Box>    

                    <Typography variant='small' fontWeight={1000}>{Course.reviews===0?0:Math.round(reviewCounts[1]/Course.reviews)*100}</Typography>
                </Stack>

                <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <Typography variant='small' fontWeight={1000}>1 Stars</Typography>
                    <Box width={'70%'}>
                    <LinearProgress variant="determinate" value={Course.reviews===0?0:Math.round(reviewCounts[0]/Course.reviews)*100} sx={{backgroundColor: '#F1F1F1','& .MuiLinearProgress-bar': {backgroundColor: '#F7B52E'}}}/>
                    </Box>    

                    <Typography variant='small' fontWeight={1000}>{Course.reviews===0?0:Math.round(reviewCounts[0]/Course.reviews)*100}</Typography>
                </Stack>


            </Stack>

            
        </Box>
        <Box sx={{width:'80%',paddingTop:5}}>
            <Stack direction={'column'} spacing={5}>
            {renderedComments}
            </Stack>
        </Box>

        </Stack>
        </Box>
    )
    }
}
export default ReviewsAndComments;