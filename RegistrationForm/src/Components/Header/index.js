import React from 'react';
import { Toolbar, AppBar, Typography } from '@material-ui/core';

const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
         {props?.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;