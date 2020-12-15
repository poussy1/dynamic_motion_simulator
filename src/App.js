import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Card from '@material-ui/core/Card';
import SimulatorChart from "./simulator_components/SimulatorChart"
import PlayButton from "./simulator_components/PlayButton"
import Legend from "./simulator_components/Legend"
import Weight from "./simulator_components/weight"
import Weight3 from "./simulator_components/weight3"
import {ReactComponent as DoubleMass} from './double_mass_red.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();


    return (
      <Card style={{margin:"20px",padding:"20px",border: '0.5px solid gray'}} >
        <Grid container spacing={3} style={{padding:"20px"}}>
          <Grid item xs={12} >
            <AppBar style={{textAlign:"center",background:"#f00101"}} position="static"> 
            {/* //style={{border: '0.5px solid gray'}} */}
              <Typography variant="h6" style={{padding:"10px"}}>
                Dynamic Vibration Absorber
              </Typography>
            </AppBar>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>          
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <AppBar style={{textAlign:"center",background:"gray"}} position="static"> 
                {/* //style={{border: '0.5px solid gray'}} */}
                  <Typography variant="h10" style={{padding:"10px"}}>
                    Variables
                  </Typography>
                </AppBar>
                <Grid container alignItems="center" style={{marginTop:"20px",flex: 1,flexDirection: 'row',justifyContent: 'space-around'}}>
                    <TextField
                      id="standard-number"
                      label="F(N)"
                      type="number"
                      style={{width:"30px"}}
                    />
                    <Divider orientation="vertical" flexItem />
                    <TextField
                      id="standard-number"
                      label="W(rad/s)"
                      type="number"
                      style={{width:"60px"}}
                    />
                    <Divider orientation="vertical" flexItem />
                    <TextField
                      id="standard-number"
                      label="K_2(N/m)"
                      type="number"
                      style={{width:"70px"}}
                    />
                    <Divider orientation="vertical" flexItem />
                    <TextField
                      id="standard-number"
                      label="M_2(Kg)"
                      type="number"
                      style={{width:"72px"}}
                    />
                    <Divider orientation="vertical" flexItem />
                    <TextField
                      id="standard-number"
                      label="K_1(N/m)"
                      type="number"
                      style={{width:"68px"}}
                    />
                    <Divider orientation="vertical" flexItem />
                    <TextField
                      id="standard-number"
                      label="M_1(Kg)"
                      type="number"
                      style={{width:"60px"}}
                    />
                </Grid>
              </Grid> 
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <AppBar style={{textAlign:"center",background:"gray"}} position="static"> 
                  {/* //style={{border: '0.5px solid gray'}} */}
                    <Typography variant="h10" style={{padding:"10px"}}>
                      Controls
                    </Typography>
                </AppBar>
                <FormControlLabel style={{marginTop:"27px"}} control={<Checkbox name="checkedC"  color="black"/>} label="Edit K_1 & M_1" />
              </Grid>      

            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={1}>
                
                <Grid item xs={5} style={{height:"auto"}}> 
                  <SimulatorChart/>
                </Grid>  
                
                <Divider orientation="vertical" flexItem style={{height:"inherit",margin:"0px 0px 0px 80px"}}/>
                
                <Grid item xs={5} > 
                    <Weight3  />
                  {/* <DoubleMass style={{height:"280px"}}/> */}
  
                </Grid>
                
                <Grid item xs={1}> 
                  <PlayButton/>
                  <Legend/>
                </Grid>
             
              </Grid>  
            </Paper>
          </Grid>
         
        </Grid>
      </Card>
    );

}

export default App;
