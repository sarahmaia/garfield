import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "@fontsource/lora";
import Grid from '@mui/material/Grid';

export default function Quote() {
    return (
        <Box sx={{ width: '100%', height: 270, backgroundColor: '#ffffed', boxShadow: '12', padding: '10px'}} >
            <Grid container item justifyContent="center" style={{paddingLeft: '10px'}}>
                <Typography style={{fontFamily: 'Lora', padding: '0px', textAlign: 'center', fontStyle: 'italic', fontSize: '19px' }} component="span" gutterBottom>
                “We have worked with Burt for years and can’t think of anyone better to do the job of Assessor. He has a great working relationship with fellow employees. 
                He is not only well qualified for the work, he is a great leader, and knows where we need to go to get more accurate and fair assessments for the taxpayers.”
                </Typography>
            </Grid>
            <Grid container item justifyContent="left" style={{paddingLeft: '10px'}}>
                <Typography style={{fontFamily: 'Lora', padding: '0px', textAlign: 'center', fontStyle: 'italic' }} variant="body1" component="span" gutterBottom>
                    Peter Jeppsen, Utah County Assessor, Commercial Manager
                </Typography>
            </Grid>
            <Grid container item justifyContent="left" style={{paddingLeft: '10px'}}>
                <Typography style={{fontFamily: 'Lora', padding: '0px', textAlign: 'center', fontStyle: 'italic' }} variant="body1" component="span" gutterBottom>
                    Theron Case, Utah County Assessor, Residential Manager
                </Typography>
            </Grid>
            <Grid container item justifyContent="left" style={{paddingLeft: '10px'}}>
                <Typography style={{fontFamily: 'Lora', padding: '0px', textAlign: 'center', fontStyle: 'italic' }} variant="body1" component="span" gutterBottom>
                    Mark Carter, Utah County Assessor, Certified Residential Appraiser & Project Manager
                </Typography>
            </Grid>
            <Grid container item justifyContent="left" style={{paddingLeft: '10px'}}>
                <Typography style={{fontFamily: 'Lora', padding: '0px', textAlign: 'center', fontStyle: 'italic' }} variant="body1" component="span" gutterBottom>
                    Eric Golden, Utah County Assessor, Certified Residential Appraiser
                </Typography>
            </Grid>
            <Grid container item justifyContent="left" style={{paddingLeft: '10px'}}>
                <Typography style={{fontFamily: 'Lora', padding: '0px', textAlign: 'center', fontStyle: 'italic' }} variant="body1" component="span" gutterBottom>
                    Christina Dobecki, Utah County Assessor, Certified Residential Appraiser
                </Typography>
            </Grid>
            <Grid container item justifyContent="left" style={{paddingLeft: '10px'}}>
                <Typography style={{fontFamily: 'Lora', padding: '0px', textAlign: 'center', fontStyle: 'italic' }} variant="body1" component="span" gutterBottom>
                    Dan Rich, Utah County Assessor, Certified Residential Appraiser
                </Typography>
            </Grid>
            <Grid container item justifyContent="left" style={{paddingLeft: '10px'}}>
                <Typography style={{fontFamily: 'Lora', padding: '0px', textAlign: 'center', fontStyle: 'italic' }} variant="body1" component="span" gutterBottom>
                     Thayle Wilkins, Utah County Assessor, Data Analyst
                </Typography>
            </Grid>
        </Box>
    ) 
}
