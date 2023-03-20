import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import Link from '@mui/material/Link';
import "@fontsource/lora"


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  fontFamily: 'Lora',
  backgroundColor: blue[500],
  '&:hover': {
    backgroundColor: blue[700],
  },
}));

export default function CustomizedButtons() {
  return (
    <Box textAlign='center'>
      <ColorButton 
      variant="contained"
      href="https://account.venmo.com/u/Burt-Garfield"
      >
      DONATE HERE
      </ColorButton>
    </Box>
  );
}