
import { Stack } from "@mui/material";
import CardSkeleton from "./CourseSkeleton";
function SkeletonDummy(){

    return(
        <Stack direction={'row'} spacing={5} justifyContent='center' >
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
      </Stack>
    )
}
export default SkeletonDummy;