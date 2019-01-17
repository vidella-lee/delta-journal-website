import React from 'react'

import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Headline from 'grommet/components/Headline'
import Box from 'grommet/components/Box'
import Link from 'gatsby-link'
import Image from 'grommet/components/Image'
import Anchor from 'grommet/components/Anchor'
import Label from 'grommet/components/Label'

// var logo = require('./deltalogo-brinyteal.png');
var logo = require('./logo-official.png');

export default class DeltaHeader extends React.PureComponent {
  render(){
    return(
      <div className="header">
      <Header 
          fixed={true}
          // float={true}
          // size={{ width: {max: 'large'}}} 
          colorIndex="neutral-3"
          margin={{bottom: 'large'}}
          >
          <Box pad='small'>
            <Title>
              <Anchor href='/'><Image src={logo} size='thumb' alt="delta journal"/></Anchor>
            </Title>
          </Box>
            <Box pad='medium'>
              <Anchor href='/about/'>
              <Label size='small' uppercase={ true }>About Us</Label>
              </Anchor>
            </Box>
            <Box pad='medium'> 
              <Anchor href='/archives/'>
                <Label size='small' uppercase={ true }>Archives</Label>
              </Anchor>
            </Box>
            <Box pad='medium'> 
              <Anchor href='/events/'>
                <Label size='small' uppercase={ true }>Events</Label>
              </Anchor>
            </Box>
              
              <Box 
              flex={true}
              justify='end'
              direction='row'
              margin='medium'
              >
              <Anchor href='/submit/'>
              <span className='submit-label'><Label size='small' uppercase={ true }> Submit</Label></span>
              </Anchor>
          </Box>
        </Header>
</div>
      )
  }
}
