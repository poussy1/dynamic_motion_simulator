import React from 'react';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function legend(props){ 
  return   (
    <div style={{textAlign:"left",marginTop:"10vh"}}>
        <div>X_1/Xst={props.xRatio||"..."}</div> 
        <div>X_1={props.x1Ratio||"..."}</div>
        <div>Xst={props.xst||"..."}</div>
        <div>K_1={props.k1||"..."}</div>
        <div>M_1={props.m1||"..."}</div>
        <div>w/w_2={props.wRatio||"..."}</div>
        <div>w_1={props.w1||"..."}</div>
        <div>w_2={props.w2||"..."}</div>
    </div>          
  )
}
export default legend;