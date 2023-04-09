import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "@fontsource/lora";
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
    createData('April 10', 'Republican Party "Meet & Greet"', "American Fork Veterans Memorial Hall", '6:30pm'),
    createData('April 11', 'Town Hall', 'American Fork Library', '7 - 8:30pm'),
    createData('April 13', 'Town Hall', '240 S Main St, Payson', '7 - 8:30pm'),
    createData('April 15', 'Vote', 'Mountain View High School', '9:00am'),
  ];

export default function Events() {
    return (
    <Box sx={{boxShadow: 12}}>
    <TableContainer sx={{backgroundColor: '#ffffed'}} component={Paper}>
            <Typography style={{padding: '7px', paddingTop: '7px', paddingLeft: '15px', fontWeight: 'bold', fontFamily: 'Lora', color: '#444444'}} variant="h4" gutterBottom>
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