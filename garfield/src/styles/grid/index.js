import * as React from 'react';
import { styled } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import "@fontsource/merriweather";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffff',
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  textAlign: 'center',
  color: '#ff6347',
  disableElevation: true,
  fontFamily: '"Merriweather"' // font of grid content
}));

export const GridContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '20px 3px',
}));

export default function GridSpacing() {
    return (
      <Box
        sx={{
          fontColor: "#FF6347",
          display: 'flex',
          backgroundColor: '#dcdcdc',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
      >
        <ButtonGroup color="secondary" size="large" variant="contained" aria-label="text button group">
          <Button style={{color: '#5167a3', fontWeight: 'bold'}}>Who I Am</Button>
          <Button style={{color: '#5167a3', fontWeight: 'bold'}}>What I Believe</Button>
          <Button style={{color: '#5167a3', fontWeight: 'bold'}}>Donate</Button>
        </ButtonGroup>
      </Box>
    );
  }