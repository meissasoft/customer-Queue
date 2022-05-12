import * as React from 'react';

import { Grid } from '@mui/material';

import MyActivity from '@/components/MyActivity';
import TabBar from '@/components/TabBar';

export default function Dashboard() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={12} md={4}>
        <MyActivity approved={'14'} rejected={'10'} issue={'4'} totalCalls={'28'} />
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <TabBar />
      </Grid>
    </Grid>
  );
}
