import React from 'react'

import Card from 'grommet/components/Card'
import Anchor from 'grommet/components/Anchor'

var cardImg = require('./writer.jpg');

export default class ApplicationsCard extends React.PureComponent {
  render(){
    return (
      <div className="card">
        <Card 
          thumbnail={cardImg}
          // label="Delta's" 
          heading='Now Accepting Fall Semester Applications!' 
          description=''
          link={<Anchor href='https://goo.gl/forms/vPvhjh8TivsWHiVk2' label='Submit an application here.'/>}
          // colorIndex='neutral-2'
          textSize='small'
          contentPad='large'
          // alignSelf='right'
          // direction='row'
          />
       </div>   
    )
}
}
