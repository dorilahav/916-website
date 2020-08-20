import React from 'react';
import {Box, CircularProgress} from '@material-ui/core';

const Loading = () => (
  <Box display="flex" justifyContent="center">
    <CircularProgress color="secondary"/>
  </Box>
);
  
export default ({loading, children}) => (
  <>
    {loading ?
      <Loading/> :
      children}
  </>
);