import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "@fontsource/lora";
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(Date, Event, Location, Time) {
    return { Date, Event, Location, Time, };
  }
  
  const rows = [
    createData('April 4', 'Town Hall', 'Provo Library', '7 - 8:30pm'),
    createData('April 5', 'Republican Party "Meet & Greet"', 'Virtual', 'TBA'),
    createData('April 8', 'Republican Party "Meet & Greet"', "Spanish Fork Veteran's Memorial Bldg", '8:00am'),
    createData('April 10', 'Republican Party "Meet & Greet"', 'TBA', 'TBA'),
    createData('April 11', 'Town Hall', 'American Fork Library', '7 - 8:30pm'),
    createData('April 12', 'Republican Party "Meet & Greet"', 'Virtual', 'TBA'),
    createData('April 13', 'Town Hall', '240 S Main St, Payson', 'TBA'),
    createData('April 15', 'Vote', 'Mountain View High School', '9:00am'),
  ];

export default function Events() {
    return (
    <Box sx={{boxShadow: 12}}>
    <TableContainer sx={{backgroundColor: '#ffffed'}} component={Paper}>
            <Typography style={{padding: '10px', fontWeight: 'bold', fontFamily: 'Lora', color: '#444444'}} variant="h4" gutterBottom>
                Events
            </Typography>
      <Table sx={{minWidth: 30, backgroundColor: '#ffffed'}} size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold', fontFamily: 'Lora', color: '#444444'}} align="right">Date</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontFamily: 'Lora', color: '#444444'}} align="right">Event</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontFamily: 'Lora', color: '#444444'}} align="right">Location</TableCell>
            <TableCell sx={{fontWeight: 'bold', fontFamily: 'Lora', color: '#444444'}} align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell sx={{fontFamily: 'Lora', color: '#444444'}} align="right">{row.Date}</TableCell>
              <TableCell sx={{fontFamily: 'Lora', color: '#444444'}} align="right">{row.Event}</TableCell>
              <TableCell sx={{fontFamily: 'Lora', color: '#444444'}} align="right">{row.Location}</TableCell>
              <TableCell sx={{fontFamily: 'Lora', color: '#444444'}} align="right">{row.Time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>


    )
}