import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function CustomTabs({params}) {
  const [value, setValue] = React.useState(0);
  const labels=params.map((item)=>{
    return <Tab key={item.id} label={<Typography variant='tabs'>{item.name}</Typography>}/>
  });


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 1000 }, bgcolor: 'background.paper' }}>
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
  );
}
export default CustomTabs;