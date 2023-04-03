import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "@fontsource/lora";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Grid from '@mui/material/Grid';
import Pictures from '../pictures';
import Endorsements from '../../components/endorsements';
import Events from '../../components/events'

export default function Body() {
  
  return (
    <Grid container sx={{ color: '#3d4849' }}>
      <Grid container>
      <Grid container item justifyContent="left">
              <Grid container item justifyContent="center">
                <Typography style={{fontFamily: 'Lora', padding: '0px', textAlign: 'center', fontStyle: 'italic' }} variant="h4" component="span" gutterBottom>
                  "Burt did an excellent job as my chief deputy assessor for seven years. Burt is highly qualified and easy to approach, two attributes you want for your next county assessor."
                </Typography>
              </Grid>
            <Grid container item justifyContent="center">
              <Typography style={{fontFamily: 'Lora', paddingBottom: '20px', textAlign: 'center', fontSize: '16px'}} variant="h6" component="span" gutterBottom>
              Kris Poulson, Utah County Assessor 2003-2023
              </Typography>
            </Grid>  
        </Grid>
      </Grid>
      
      <Grid container>
        <Grid item sx={{padding: '55px'}} justifyContent="left">
          <Endorsements/>
        </Grid>
        <Grid item sx={{paddingLeft: '50px', paddingBottom: '20px', width: 800}} justifyContent="right" >
          <Events/>
        </Grid>
      </Grid>


      <Grid container>
        <Grid item xs={8}>
          <Grid item xs={4}>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Typography style={{paddingTop: '16px', fontWeight: 'bold', fontFamily: 'Lora', color: '#444444'}} variant="h4" gutterBottom>
                Qualifications
              </Typography>
            </Box>
          </Grid>

          <Grid container item justifyContent="left">
            <Grid item>
              <CheckCircleOutlineIcon />
            </Grid>
            <Grid item xs>
              <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}} wrap>
                Masters in Industrial Administration, Purdue University, West Lafayette, IN, 1995
              </Typography>
            </Grid>
          </Grid>
          <Grid container item justifyContent="left">
            <Grid item>
              <CheckCircleOutlineIcon />
            </Grid>
            <Grid item xs>
              <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}} wrap>
                B.S. Statistical Analysis, BYU, 1993
              </Typography>
            </Grid>
          </Grid>
          <Grid container item justifyContent="left">
            <Grid item>
              <CheckCircleOutlineIcon />
            </Grid>
            <Grid item xs>
              <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}} wrap>
                7 years: Chief Deputy Assessor Utah County
              </Typography>
            </Grid>
          </Grid>
          <Grid container item justifyContent="left">
            <Grid item>
              <CheckCircleOutlineIcon />
            </Grid>
            <Grid item xs>
              <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}} wrap>
                12 years: Employed at Utah County's Assessor Office
              </Typography>
            </Grid>
          </Grid>
          <Grid container item justifyContent="left">
            <Grid item>
              <CheckCircleOutlineIcon />
            </Grid>
            <Grid item xs>
              <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}} wrap>
                17 years: Certified Appraiser
              </Typography>
            </Grid>
          </Grid>
          <Grid container item justifyContent="left">
            <Grid item>
              <CheckCircleOutlineIcon />
            </Grid>
            <Grid item xs>
              <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}} wrap>
                26 years: Work experience, American Express, Discover Card, Zions Bank, Franklin Covey, Landmark Appraisal
              </Typography>
            </Grid>
          </Grid>
          <Grid container item justifyContent="left">
            <Grid item>
              <CheckCircleOutlineIcon />
            </Grid>
            <Grid item xs>
              <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}} wrap>
                Past President of the International Association of Assessing Officers, Utah Chapter
              </Typography>
            </Grid>
          </Grid>
          <Grid container item justifyContent="left">
            <Grid item>
              <CheckCircleOutlineIcon />
            </Grid>
            <Grid item xs>
              <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}} wrap>
                Licensed Appraising Instructor
              </Typography>
            </Grid>
          </Grid>
          <Grid container item justifyContent="left">
            <Grid item>
              <CheckCircleOutlineIcon />
            </Grid>
            <Grid item xs>
              <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}} wrap>
                Former Adjunct Professor, Statistical Analysis Utah Valley University
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        
        <Grid item justifyContent="right">
          <img src="/images/body/garfieldfamily.jpg" style={{width: '420px', height: 'auto'}} />
        </Grid>
      </Grid>

      <Grid item xs={4}>
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography style={{paddingTop: '16px', fontWeight: 'bold', fontFamily: 'Lora', color: '#444444'}} variant="h4" gutterBottom>
            Strategic Plan
          </Typography>
        </Box>
      </Grid>
      <Grid container item justifyContent="left">
      <Typography style={{fontFamily: 'Lora', paddingTop: '15px'}} variant="body1" component="span" gutterBottom>
      <span style={{fontWeight: 'bold'}}>Accurate Assessment:</span> By building accurate valuation models to match sold prices, for all property types. 
      </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <Typography style={{fontFamily: 'Lora', paddingTop: '15px'}} variant="body1" component="span" gutterBottom>
          <span style={{fontWeight: 'bold'}}>Fairness:</span> By working with legislature to refine laws to more fairly distribute the property tax burden.
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <Typography style={{fontFamily: 'Lora', paddingTop: '15px'}} variant="body1" component="span" gutterBottom>
        <span style={{fontWeight: 'bold'}}>Staff Development:</span> By training assessor office staff on statistical modeling, mass-appraising, appraising principles, and database design.
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <Typography style={{fontFamily: 'Lora', paddingTop: '15px'}} variant="body1" component="span" gutterBottom>
          <span style={{fontWeight: 'bold'}}>Transparency:</span> By providing more information to county citizens regarding property value changes and the effects it has on tax assessments.
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <Typography style={{fontFamily: 'Lora', paddingTop: '15px'}} variant="body1" component="span" gutterBottom>
        Thank you for your interest in my candidacy. I am running to be the next Utah County Assessor because I believe my skill set matches the needs 
        of Utah County's growth. I am a conservative who believes the government has a limited but important role - to efficiently do the work required by law.
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <Typography style={{fontFamily: 'Lora', paddingTop: '15px'}} variant="body1" component="span" gutterBottom>
        These are volatile times in real estate. I have worked in appraising since the real estate bubble of 2007/2008. I have also studied the 
        rapid value increases since 2020. I am currently watching to see if we have the same signs of a bubble, as we had in 2007/2008.
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <Typography style={{fontFamily: 'Lora', paddingTop: '15px'}} variant="body1" component="span" gutterBottom>
        My goal as the next Assessor is to ensure that public policies are based upon sound economic principles and that assessment follows the Utah State 
        Constitution. This is a position which requires a unique combination of knowledge and experience which I have spent decades developing. 
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <Typography style={{fontFamily: 'Lora', paddingTop: '15px', fontSize: '16px'}} variant="body1" component="span" gutterBottom>
        Thank you for your support in the election on April 15, 2023.
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <Typography style={{fontFamily: 'Lora', paddingTop: '15px', fontSize: '16px'}} variant="body1" component="span" gutterBottom>
        Burt Garfield MBA, BS, CRA
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
      <Typography style={{fontFamily: 'Lora', paddingTop: '0px', fontSize: '16px'}} variant="body1" component="span" gutterBottom>
          Valuation Manager, Utah County Assessor Office
        </Typography>
        </Grid>
    </Grid>
  );
}
