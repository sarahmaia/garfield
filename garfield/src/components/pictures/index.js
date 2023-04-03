import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PicturesContainer, PicturesImage } from "../../styles/pictures";
import Grid from '@mui/material/Grid'

export default function Pictures() {
  return (
    <PicturesContainer>
        <Grid container sx={{ color: '#3d4849' }}>
      <Grid container item justifyContent="center">
      <Box display="flex">
        <Grid sx={{paddingRight: '15px'}}>
          <PicturesImage sx={{boxShadow: '12', padding: '0px', width: 300, height: 250}} src="/images/body/purduediploma.jpg" />
        </Grid>
        <Grid sx={{paddingRight: '15px', paddingLeft: '15px'}}>
          <PicturesImage sx={{boxShadow: '12', padding: '0px', width: 300, height: 250}} src="/images/body/BYU Diploma.jpg" />
        </Grid>
        <Grid sx={{paddingLeft: '15px'}}>
          <PicturesImage sx={{boxShadow: '12', padding: '0px', width: 300, height: 250}} src="/images/body/license1.png" />
          </Grid>
      </Box>
      </Grid>
      <Grid container item justifyContent="center">
      <Box display="flex">
        <PicturesImage sx={{padding: '12px', width: 250, height: 300}} src="/images/body/Burtaward.png" />
        <PicturesImage sx={{padding: '12px', width: 250, height: 300}} src="/images/body/Burtaward2.png" />
      </Box>
      </Grid>
      </Grid>
    </PicturesContainer>
  );
}
