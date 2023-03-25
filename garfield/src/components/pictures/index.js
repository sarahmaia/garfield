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
        <PicturesImage src="/images/body/purduediploma.jpg" />
        <PicturesImage src="/images/body/BYU Diploma.jpg" />
        <PicturesImage src="/images/body/license1.png" />
      </Box>
      </Grid>
      <Grid container item justifyContent="center">
      <Box display="flex">
        <PicturesImage src="/images/body/Burtaward.png" />
        <PicturesImage src="/images/body/Burtaward2.png" />
      </Box>
      </Grid>
      </Grid>
    </PicturesContainer>
  );
}
