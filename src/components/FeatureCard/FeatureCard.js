import React from 'react'
import Card from 'grommet/components/Card'
import Anchor from 'grommet/components/Anchor'

export default class FeatureCard extends React.PureComponent {
  render(){
    const {cardImg, label, heading, description, link, linkLabel} = this.props;
    return (
      <div className="card">
        <Card 
         thumbnail={cardImg}
         label={label}
         heading={heading}
         description={description}
         //colorIndex='neutral-2'
         textSize='small'
         contentPad='large'
         link={<Anchor href={link} label={linkLabel}/>}
         />
        </div>
    )
}
}