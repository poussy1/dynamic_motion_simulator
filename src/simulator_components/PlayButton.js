import React from 'react';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function PlayButton(props){ 
  return   (
    <Button style={{float:"left"}} variant="contained" color="primary" startIcon={<PlayArrowIcon color="white" />} />
            
  )
}
export default PlayButton;