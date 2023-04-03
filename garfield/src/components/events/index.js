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
    <TableContainer sx={{backgroundColor: '#ffffed'}} component={Paper}>
            <Typography style={{padding: '10px', fontWeight: 'bold', fontFamily: 'Lora', color: '#444444'}} variant="h4" gutterBottom>
                Events
            </Typography>
      <Table sx={{minWidth: 30, backgroundColor: '#ffffed', boxShadow: '12'}} size="small">
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


        // <Box sx={{ width: 600, height: 360, backgroundColor: '#ffffed', boxShadow: '12'}}>
        //     <Grid container item justifyContent="left" style={{paddingLeft: '10px'}}>
        //         <Typography style={{fontFamily: 'Lora', padding: '0px', textAlign: 'center', fontWeight: 'bold' }} variant="h4" component="span" gutterBottom>
        //             Events
        //         </Typography>
        //     </Grid>

        //     <Divider />
        //     <Grid container item sx={{padding: '5px'}} justifyContent="left">
        //         <Grid item xs>
        //         <Typography style={{borderRight: '1px light grey', paddingLeft: '0px', fontFamily: 'Lora'}} wrap>
        //             April 4, Town Hall, Provo Library 7 - 8:30pm
        //         </Typography>
        //         </Grid> 
        //     </Grid>

        //     <Divider />
        //     <Grid container item sx={{padding: '5px'}} justifyContent="left">
        //         <Grid item xs>
        //         <Typography style={{paddingLeft: '0px', fontFamily: 'Lora'}} wrap>
        //             April 5, Republican Party "meet and greet", Virtual, time TBA
        //         </Typography>
        //         </Grid> 
        //     </Grid>

        //     <Divider />
        //     <Grid container item sx={{padding: '5px'}} justifyContent="left">
        //         <Grid item xs>
        //         <Typography style={{borderRight: '1px light grey', paddingLeft: '0px', fontFamily: 'Lora'}} wrap>
        //             April 8, Republican Party "meet and greet", in-person, 8am Spanish Fork Veteran's Memorial Bldg
        //         </Typography>
        //         </Grid> 
        //     </Grid>

        //     <Divider />
        //     <Grid container item sx={{padding: '5px'}} justifyContent="left">
        //         <Grid item xs>
        //         <Typography style={{borderRight: '1px light grey', paddingLeft: '0px', fontFamily: 'Lora'}} wrap>
        //             April 10, Republican Part "meet and greet", in-person, time and location TBA
        //         </Typography>
        //         </Grid> 
        //     </Grid>

        //     <Divider />
        //     <Grid container item sx={{padding: '5px'}} justifyContent="left">
        //         <Grid item xs>
        //         <Typography style={{borderRight: '1px light grey', paddingLeft: '0px', fontFamily: 'Lora'}} wrap>
        //             April 11, Town Hall, American Fork Library, 7 - 8:30pm
        //         </Typography>
        //         </Grid> 
        //     </Grid>

        //     <Divider />
        //     <Grid container item sx={{padding: '5px'}} justifyContent="left">
        //         <Grid item xs>
        //         <Typography style={{borderRight: '1px light grey', paddingLeft: '0px', fontFamily: 'Lora'}} wrap>
        //             April 12, Republican Party "meet and greet", Virtual, time TBA
        //         </Typography>
        //         </Grid> 
        //     </Grid>

        //     <Divider />
        //     <Grid container item sx={{padding: '5px'}} justifyContent="left">
        //         <Grid item xs>
        //         <Typography style={{borderRight: '1px light grey', paddingLeft: '0px', fontFamily: 'Lora'}} wrap>
        //             April 13, Town Hall, 240 South Main Street, Payson, time TBA
        //         </Typography>
        //         </Grid> 
        //     </Grid>

        //     <Divider />
        //     <Grid container item sx={{padding: '5px'}} justifyContent="left">
        //         <Grid item xs>
        //         <Typography style={{borderRight: '1px light grey', paddingLeft: '0px', fontFamily: 'Lora'}} wrap>
        //             April 15, Vote, Mountain View High School, 9am
        //         </Typography>
        //         </Grid> 
        //     </Grid>

        // </Box>

    )
}