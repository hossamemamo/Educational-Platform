import {
    Box, Stack,Typography
  } from "@mui/material";

function Requirments(){

    return(
            <Box sx={{borderRadius:'10px',  bgcolor: 'background.paper',border: 0.5,padding:3}}>
                <Box paddingLeft={2}>
                    <Typography variant='big' fontWeight={1000}>
                        Requirements
                    </Typography>
                    <Typography variant="small" component="div">

                        <Stack direction={'column'} spacing={2} paddingTop={2}>
                        <li>You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe</li>
                        <li>No previous design experience is needed.</li>
                        <li>No previous Adobe XD skills are needed.</li>

                        </Stack>

                    </Typography>

                </Box>
            </Box>
    )
}

export default Requirments;