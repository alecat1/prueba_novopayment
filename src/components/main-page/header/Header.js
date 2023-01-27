import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const styles = {

  floatRight: {
    float: 'right',
  },
  floatLeft: {
    float: 'left',
  },
  title: {
    float: 'left',
    fontWeight: 'bold',
    fontSize: 'x-large',
  },
  userName: {
    fontSize: 'large',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#0A05A6'
  }
};
var title1 = "Tu PruTec"
var username = "USER NAME"
const Header = () => {
  return (
    <>
      <Box>
        <AppBar position='sticky' disablegutters='true'>
          <Toolbar sx={styles.toolbar}>
            <div sx={styles.floatLeft}>
                <Typography variant='title' color='inherit' sx={styles.title}>
                    {title1}
                </Typography>
            </div>
            <div sx={styles.floatRight}>
                <Typography variant='title' color='inherit' sx={styles.userName}>
                    {username}
                </Typography>
                <IconButton color='inherit' aria-label='Menu'>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;