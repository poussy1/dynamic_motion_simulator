import React, { useState } from 'react';
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
import InputAdornment from '@material-ui/core/InputAdornment';
import Weight3 from "./simulator_components/weight3"


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
  const classes = useStyles()
    const[m1,setM1] = useState(250)
    const[m2,setM2] = useState(50)
    const[k1,setK1] = useState(2500)
    const[k2,setK2] = useState(500)
    const[w,setW]   = useState(3.23)
    const[f,setF]   = useState(750)
    const[x1,setX1] = useState(0)
    const[x2,setX2] = useState(1)
    const[disableM1AndK1,setDisableM1AndK1]     = useState(true)
    const[baseSpringHeight,setBaseSpringHeight] = useState(0)
    const[topSpringHeight,setTopSpringHeight]   = useState(150)

    function handlePlayClick(){
      var numerator = k2-m2*Math.pow(w,2) 
      var denominator = (m1*m2*Math.pow(w,4))+(k1*k2)-(Math.pow(w,2)*(m1*k2+m2*(k1+k2)))
      var x1 = parseFloat(numerator)/parseFloat(denominator)
      setX1(x1)
      // console.log("x1 numerator:",numerator)
      // console.log("x1 denominator:",denominator)
      
      var num = k2*f
      var denom = m1*m2*Math.pow(w,4) - Math.pow(w,2)*(m1*k2+m2*(k1+k2))+k1*k2
      var x2 = num/denom
     
      setX2(x2)
    }
    React.useEffect(()=>{
      
      var h = Math.ceil(50+(Math.abs(x1))*50000)
      if(h>150){h=150}
      console.log(h)
      setBaseSpringHeight(h)
      var topH = Math.ceil(50+(Math.abs(x2))*50)
      console.log(topH)
      if(topH>150){topH=150}
      setTopSpringHeight(topH)
    },[x1,x2])
    return (
      <Card style={{margin:"20px",padding:"20px",border: '0.5px solid gray'}} >
        <Grid container spacing={3} style={{padding:"20px"}}>
          <Grid item xs={12} >
            <AppBar style={{textAlign:"center",background:"#f00101"}} position="static"> 
            {/* //style={{border: '0.5px solid gray'}} */}
              <Typography variant="h6" style={{padding:"10px"}}>
                Dynamic Vibration Absorber -x1:{x1} -x2:{x2}
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
                      label="F"
                      type="number"
                      value={f}
                      style={{width:"100px"}}
                      onChange={(e)=> setF(e.target.value)} 
                      InputProps={{
                        endAdornment: <InputAdornment position="end">N</InputAdornment>,
                        inputProps: { max: 1000, 
                          min: 500 
                        }
                      }}
                      error={f>1000||f<500}
                      helperText={(f>1000||f<500)?'500<f<1000':""}
                    />
                    <Divider orientation="vertical" flexItem />
                    <TextField
                      id="standard-number"
                      label="W"
                      type="number"
                      value={w}
                      style={{width:"100px"}}
                      onChange={(e)=> setW(e.target.value)} 
                      InputProps={{
                        endAdornment: <InputAdornment position="end">rad/s</InputAdornment>,
                        inputProps: { max: 16, 
                          min: 0 
                        }
                      }}
                      error={w>16||w<0}
                      helperText={(w>16||w<0)?'0<w<16':""}
                    />
                    <Divider orientation="vertical" flexItem />
                    <TextField
                      id="standard-number"
                      label="K_2"
                      value={k2}
                      type="number"
                      style={{width:"100px"}}
                      onChange={(e)=> setK2(parseInt(e.target.value))} 
                      InputProps={{
                        endAdornment: <InputAdornment position="end">N/m</InputAdornment>,
                        inputProps: { min: 200, 
                         max: 1000 
                        }
                      }}
                      error={k2>1000||k2<200}
                      helperText={(k2>1000||k2<200)?'200<w<1000':""}
                    />
                    <Divider orientation="vertical" flexItem />
                    <TextField
                      id="standard-number"
                      label="M_2"
                      value={m2}
                      type="number"
                      style={{width:"100px"}}
                      onChange={(e)=> setM2(e.target.value)} 
                      InputProps={{
                        endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                        inputProps: { 
                           min: 10, 
                           max: 100 
                        }
                      }}
                      error={m2>100||m2<10}
                      helperText={(m2>100||m2<10)?'10<m2<100':""}
                    />
                    <Divider orientation="vertical" flexItem />
                    <TextField
                      id="standard-number"
                      label="K_1"
                      value={k1}
                      disabled={disableM1AndK1}
                      type="number"
                      style={{width:"100px"}}
                      onChange={(e)=> setK1(e.target.value)} 
                      InputProps={{
                        endAdornment: <InputAdornment position="end">N/m</InputAdornment>,
                        inputProps: { 
                          min: 2000, 
                          max: 5000 
                        }
                      }}
                      error={k1>5000||k1<2000}
                      helperText={(k1>5000||k1<2000)?'2000<k1<5000':""}
                    />
                    <Divider orientation="vertical" flexItem />
                    <TextField
                      id="standard-number"
                      label="M_1"
                      value={m1}
                      type="number"
                      style={{width:"100px"}}
                      disabled={disableM1AndK1}
                      onChange={(e)=> setM1(e.target.value)} 
                      InputProps={{
                        endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                          inputProps: { 
                          min: 200, 
                          max: 500 
                        }
                      }}
                      error={m1>500||m1<200}
                      helperText={(m1>500||m1<200)?'200<m1<500':""}
                
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
                < FormControlLabel style={{marginTop:"27px"}} 
                  control={<Checkbox name="checkedC" onChange={(e)=> setDisableM1AndK1(!e.target.checked)} color="black"/>}
                  label="Edit K_1 & M_1" 
                />
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
                    <Weight3 baseSpringHeight={baseSpringHeight} topSpringHeight={topSpringHeight} />
              
                </Grid>
                
                <Grid item xs={1}> 
                  <PlayButton handlePlayClick={handlePlayClick} />
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
