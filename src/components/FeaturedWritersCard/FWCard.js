import React from 'react'

import Card from 'grommet/components/Card'

var cardImg = require('./writer-2.png');

export default class FWCard extends React.PureComponent {
  render(){
    return (
      <div className="card">
        <Card 
          thumbnail={cardImg}
          label="Delta's" 
          heading='Online Features' 
          description='Poetry and fiction from [insert name], [insert name], 
                       and [insert name].'
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