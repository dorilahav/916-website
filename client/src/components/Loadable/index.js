import React from 'react';
import {Box, CircularProgress} from '@material-ui/core';

const Loading = ({className}) => (
  <Box display="flex" justifyContent="center">
    <CircularProgress className={className} color="secondary"/>
  </Box>
);
  
export default ({loading, loadingClassName, children}) => (
  <>
    {loading ?
      <Loading className={loadingClassName}/> :
      children}
  </>
);