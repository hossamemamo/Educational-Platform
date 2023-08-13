import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function CardSkeleton() {
  return (
    <Card sx={{ maxWidth: 272 ,maxHeight:500}}>
      <Skeleton variant="rectangular" height={194} />

      <CardContent>
        <Skeleton variant="text" width="80%" height={40} sx={{ marginBottom: 1 }} />
        <Skeleton variant="text" width="40%" height={20} sx={{ marginBottom: 1 }} />

        <Skeleton variant="text" width="80%" height={20} sx={{ marginBottom: 1 }} />
        <Skeleton variant="text" width="100%" height={20} sx={{ marginBottom: 1 }} />

        <Skeleton variant="text" width="60%" height={20} sx={{ marginBottom: 1 }} />

        <Skeleton variant="text" width="80%" height={20} sx={{ marginBottom: 1 }} />

        <Stack direction={'row'} spacing={5}>
          <Skeleton variant="rectangular" width={150} height={34} sx={{ marginBottom: 1 }} />

          <Skeleton variant="rectangular" width={50} height={34} />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default CardSkeleton;
