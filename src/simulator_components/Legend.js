import React from 'react';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function legend(props){ 
  return   (
    <div style={{textAlign:"left",marginTop:"20vh"}}>
        <div>X1/Xst={props.xRatio||"..."}</div> 
        <div>X1={props.x1Ratio||"..."}</div>
        <div>Xst={props.xst||"..."}</div>
        <div>K1={props.k1||"..."}</div>
        <div>M1={props.m1||"..."}</div>
        <div>w/w2={props.wRatio||"..."}</div>
        <div>w1={props.w1||"..."}</div>
        <div>w2={props.w2||"..."}</div>
    </div>          
  )
}
export default legend;