import React from 'react'
import Anchor from 'grommet/components/Anchor'
import Card from 'grommet/components/Card'

var cardImg = require('./issue60.jpg');

export default class JournalCard extends React.PureComponent {
  render(){
    return (
      <div className='card'>
        <Card
      	  thumbnail={cardImg}
          label='Spring 2018' 
      	  heading='60th Issue' 
      	  description='Our latest featuring some of LSU&#8217;s greatest. '
          // colorIndex='neutral-2'
          textSize='small'
          contentPad='large'
          link={<Anchor href='/delta60/' label='Take a Look'/>}
          // alignSelf='center'
          // direction='row'
      	   />
          
      </div>
    )
}
}