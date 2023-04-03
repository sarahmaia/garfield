import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "@fontsource/lora";
import Grid from '@mui/material/Grid';
import CircleIcon from '@mui/icons-material/Circle';

const styles = {
    activity: { height: 10, width: 10 },
  };
  

export default function Endorsements() {
    return (
        <Box sx={{ width: 500, height: 200, backgroundColor: '#ffffed', boxShadow: '12'}} >
            <Grid container item justifyContent="left" style={{paddingLeft: '10px'}}>
                <Typography style={{fontFamily: 'Lora', padding: '0px', textAlign: 'center', fontWeight: 'bold' }} variant="h4" component="span" gutterBottom>
                    Endorsements
                </Typography>
            </Grid>
            <Grid container style={{paddingLeft: '10px'}}>
                <Grid item>
                <CircleIcon style={styles.activity}/>
                </Grid>
                <Grid item xs>
                    <Typography style={{paddingLeft: '15px', fontFamily: 'Lora'}} wrap>
                    Amelia Powers Gardner, Utah County Commissioner
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={{paddingLeft: '10px'}}>
                <Grid item>
                <CircleIcon style={styles.activity}/>
                </Grid>
                <Grid item xs>
                    <Typography style={{paddingLeft: '15px', fontFamily: 'Lora'}} wrap>
                        Kim Jackson, Utah County Treasurer
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={{paddingLeft: '10px'}}>
                <Grid item>
                <CircleIcon style={styles.activity}/>
                </Grid>
                <Grid item xs>
                    <Typography style={{paddingLeft: '15px', fontFamily: 'Lora'}} wrap>
                        Mike McKell, Utah State Senator
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={{paddingLeft: '10px'}}>
                <Grid item>
                <CircleIcon style={styles.activity}/>
                </Grid>
                <Grid item xs>
                    <Typography style={{paddingLeft: '15px', fontFamily: 'Lora'}} wrap>
                        Peter Jeppsen, Utah County Commercial Manager
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={{paddingLeft: '10px'}}>
                <Grid item>
                <CircleIcon style={styles.activity}/>
                </Grid>
                <Grid item xs>
                    <Typography style={{paddingLeft: '15px', fontFamily: 'Lora'}} wrap>
                        Anthony Canto, Utah County Surveyor
                    </Typography>
                </Grid>
            </Grid>
    </Box>

    )

}
