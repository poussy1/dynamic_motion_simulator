import React from 'react';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function PlayButton(props){ 
  return   (
    <Button style={{float:"left",background:"black",color:"white"}} variant="contained" startIcon={<PlayArrowIcon style={{fontSize:"30px"}} color="white" />} />
            
  )
}
export default PlayButton;