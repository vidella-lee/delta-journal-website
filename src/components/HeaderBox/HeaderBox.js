import React from 'react'
import Box from 'grommet/components/Box'
import Columns from 'grommet/components/Columns';
import Label from 'grommet/components/Label';

export default class HeaderBox{
  render(){
  	return(
  	  <Box
        align='center'
        pad='small'
        margin='medium'
  	  >
  	    <Label>
  	    	{this.props.text}
  	    </Label>
  	  </Box>
  	)
  }

} 
