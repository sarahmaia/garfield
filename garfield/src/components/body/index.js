import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "@fontsource/lora";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Grid from '@mui/material/Grid'

export default function Body() {
  return (
    <Grid container sx={{ color: '#3d4849' }}>
      <Grid item xs={4}>
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          <Typography style={{paddingTop: '16px', fontWeight: 'bold', fontFamily: 'Lora', color: '#444444'}} variant="h4" gutterBottom>
            Qualifications
          </Typography>
        </Box>
      </Grid>
      <Grid container item justifyContent="left">
        <CheckCircleOutlineIcon />
        <Typography style={{paddingLeft: '6px', fontFamily: 'Lora', fontColor: '#4d4dff'}}>
            7 Years as Chief Deputy Assessor for Utah County 
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <CheckCircleOutlineIcon />
        <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}}>
          17 years Certified Residential Appraiser, Utah Division of Real Estate  
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <CheckCircleOutlineIcon />
        <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}}>
            12 Years Experience with the Utah County Assessor's Office
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <CheckCircleOutlineIcon />
        <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}}>
            Former President of the International Association of Assessing Officers, Utah Chapter
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <CheckCircleOutlineIcon />
        <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}}>
            Licensed Real Estate Appraiser Instructor, Utah Division of Real Estate
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <CheckCircleOutlineIcon />
        <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}}>
            26 years Professional Work Experience, American Express, Discover Card, Zions Bank, Franklin Covey
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <CheckCircleOutlineIcon />
        <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}}>
            Masters Degree in Management, Purdue's Krannert School of Managment, West Lafayette Indiana
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <CheckCircleOutlineIcon />
        <Typography style={{paddingLeft: '6px', fontFamily: 'Lora'}}>
        B.S. Statisitcal Analysis, BYU
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
      <Typography style={{fontFamily: 'Lora', paddingTop: '20px'}} variant="body1" component="span" gutterBottom>
      Thank you for your interest in my candidacy. I am running to be the next Utah County Assessor because I believe in efficient and effective public service. 
      As the Assessor for Utah County, I will work diligently to ensure that property valuations are fair and equitable - that similar properties are assessed similarly. 
      I am running as a conservative who believes the government has a limited but important role to efficiently do the work required by law.
         </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <Typography style={{fontFamily: 'Lora', paddingTop: '20px'}} variant="body1" component="span" gutterBottom>
        As the Assessor, I will work to limit the impact the government has on the people of Utah County. I will work to keep policies simple and economically sound. 
        In 2011, shortly after the housing bubble, approximately 50% of homes listed for sale in Utah County were in a foreclosure status. This seems almost incomprehensible 
        now given the large increases in real estate values. But I have been around long enough to see extremes of the market, and I know the risks at each end. My extensive work in management, mass-appraising, and individual appraising qualifies me for the office.
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <Typography style={{fontFamily: 'Lora', paddingTop: '20px'}} variant="body1" component="span" gutterBottom>
        I am thoroughly prepared for this position. It is my goal as the next 
        Assessor to ensure that public policies are based upon sound economic principles, and that assessments follow Utah State Constitutional requirements. This requires 
        great skill and careful mass-appraising techniques. These skills are not widely known nor taught. Given my background, I have the requisite experience to be the next Utah County Assessor. 
        Thank you for your support.
        </Typography>
      </Grid>
      <Grid container item justifyContent="left">
        <Typography style={{fontFamily: 'Lora', paddingTop: '20px'}} variant="body1" component="span" gutterBottom>
        
        </Typography>
      </Grid>
    </Grid>
  );
}
