import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Spinner() {
  return (
    <Box sx={{ display: 'flex',alignItems:'center',height:'500px',backgroundColor:'#ecf0f3',width:'100%',justifyContent:'center'}}>
      <CircularProgress color='secondary'/>
    </Box>
  );
}