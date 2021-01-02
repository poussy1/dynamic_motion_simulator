import React from 'react';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function legend({x1,x2,k1,k2,m1,m2,w,f}){ 
  var numerator = k2-m2*Math.pow(w,2) 
  var denominator = (m1*m2*Math.pow(w,4))+(k1*k2)-(Math.pow(w,2)*(m1*k2+m2*(k1+k2)))
  var x1 = parseFloat(numerator)/parseFloat(denominator)
  console.log(x1)
  return   (
    <div style={{textAlign:"left",marginTop:"17vh",marginRight:"20vw"}}>
        <div>X_1/Xst={Math.abs((x1*k1/f).toFixed(4))||"..."}</div> 
        <div>X_1={Math.abs((x1).toFixed(4))||"..."}</div>
        <div>Xst={f/k1||"..."}</div>
        <div>K_1={k1||"..."}</div>
        <div>M_1={m1||"..."}</div>
        <div>w/w_2={parseFloat(w/Math.sqrt(k2/m2)).toFixed(1)||"..."}</div>
        <div>w_1={parseFloat(Math.sqrt(k1/m1)).toPrecision(3)||"..."}</div>
        <div>w_2={parseFloat(Math.sqrt(k2/m2)).toPrecision(3)||"..."}</div>
    </div>          
  )
}
export default legend;