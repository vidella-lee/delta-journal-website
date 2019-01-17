import React from 'react'
import Card from 'grommet/components/Card'
import Anchor from 'grommet/components/Anchor'

var cardImg = require('./hc-sign-1.jpg');

export default class HCRCard extends React.PureComponent {
  render(){
    return (
      <div className="card">
        <Card thumbnail={cardImg}
              label='Highland Coffees'
              heading='Reading Series' 
              description='An open mic for the poetic souls and storytellers. Twice a month.'
              colorIndex='neutral-2'
              textSize='small'
              contentPad='large'
              link={<Anchor href='./highland-coffee-readings' label='Share with the community.'/>}
              // alignSelf='left'
              // direction='row'
         />
        </div>
    )
}
}