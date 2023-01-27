import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
  copyRight: {
    float: 'left',
    fontSize: 'medium',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 'large',
  },
  footer: {
    display: 'flex',
    width: '100%',
    height: '7rem',
    position: 'fixed',
    bottom: '0',
    justifyContent: 'space-evenly',
    backgroundColor: '#0A05A6',
    color: 'white',
    paddingTop: '3rem',
    borderTop: 'solid aquamarine 2px'
  }
};
var companyName = "Isotipo"
var copyRight = "© 2022 Novopayment Inc. All rights reserved."
const Footer = () => {
  return (
    <>
    <Box sx={styles.footer}>
        <div sx={styles.floatLeft}>
            <Typography variant='title' color='inherit' sx={styles.title}>
                {companyName}
            </Typography>
        </div>
        <div sx={styles.floatRight}>
            <Typography variant='title' color='inherit' sx={styles.copyRight}>
                {copyRight}
            </Typography>
        </div>
        <div sx={styles.floatRight}>
            <Typography variant='title' color='inherit' sx={styles.title}>
            {companyName}
            </Typography>
        </div>
    </Box>
    </>
  );
};

export default Footer;