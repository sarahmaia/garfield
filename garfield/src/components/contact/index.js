import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import "@fontsource/lora";

const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    backgroundColor: theme.palette.background.emphasis,
  },
  midColumn: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(4)
    }
  }
}));

export default function Contact(props) {
  const classes = useStyles();

  const content = {
    'contact2': 'Email',
    'contact2-desc': 'burtmba@gmail.com',
    'contact4': 'Phone',
    'contact4-desc': '(801) 709-1582',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg"> 
        <Box py={10}>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.midColumn}>
                <Box display="flex">
                  <div>
                    <Avatar className={classes.iconWrapper}>
                      <EmailIcon fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography fontFamily='lora' variant="h6" gutterBottom={true}>{content['contact2']}</Typography>
                    <Typography fontFamily='lora' variant="body2" color="textSecondary">{content['contact2-desc']}</Typography>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex">
                <div>
                  <Avatar className={classes.iconWrapper}>
                    <PhoneIcon fontSize="small" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography fontFamily='lora' variant="h6" gutterBottom={true}>{content['contact4']}</Typography>
                  <Typography fontFamily='lora' variant="body2" color="textSecondary">{content['contact4-desc']}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}