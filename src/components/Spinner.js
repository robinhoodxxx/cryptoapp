import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Spinner() {
  return (
    <Box style={{ display: 'flex',alignItems:'center',height:'100vh',backgroundColor:'#ecf0f3',width:'100%',justifyContent:'center'}}>
      <CircularProgress color='secondary'/>
    </Box>
  );
}