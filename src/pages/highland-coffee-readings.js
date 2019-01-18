import React from 'react'

import Headline from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Link from 'gatsby-link'
import Label from 'grommet/components/Label'
import Image from 'grommet/components/Image'
import Columns from 'grommet/components/Columns'
import Anchor from 'grommet/components/Anchor'
import App from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Split from 'grommet/components/Split'
import Heading from 'grommet/components/Heading'
import Hero from 'grommet/components/Hero'

import DeltaFooter from '../components/Footer'
import DeltaHeader from '../components/Header'
import SVG from '../images/DeltaStripedBack'

var background = require('../images/delta-striped-1.png');
var readingPic = require('../images/reading-1.jpg');

export default class HighlandCoffeeReadings extends React.PureComponent {
	render(){
		return(
			<div>
			  <DeltaHeader />
			  <Split >
			    <Section
			     full={{vertical:true}}
			     colorIndex="accent-1"
			     justify='center'
			     align='center'
			     >
			     <div style={{margin:'0px'}, {width:'100%'}, {height:'50%'}, {filter:'drop-shadow(16px -13px 10px grey)'}}>
					<Box full={ true } texture={ readingPic } size='large'>  
                       <Box colorIndex='accent-3' full={ true }></Box>
                   </Box>
                   </div>
			    </Section>
			    <Section
			     full={{vertical:true}}
			     colorIndex='accent-1'
			     // texture={ background }
			     align='center'
			     justify='center'
			     >
			     
			     <Box
			      size='large'
			      colorIndex='neutral-3'
			      align='center'
			      margin='large'
			      >
			        <Columns size='small'>
			         
			          <Box
                       pad='small'
                       textAlign='center'
                       // align='left'
                       separator='all'
                       // justify='center'
                       margin='large'
                       
			         >
			         	
			            <Paragraph>
			             Come share your writing with Delta and other LSU literary creatives.
			             <br />
			             If you'd like to read, please contact us at deltajournal@gmail.com or message us on 
			             <Anchor href='https://www.facebook.com/DeltaLiteraryJournal/' label=' Facebook' color='neutral-1'></Anchor>
			           .
			          </Paragraph>
			        
			        </Box>
			         <Box textAlign='center'>
			            <Heading tag='h2'>Fall 2018 Schedule</Heading>
			            <Paragraph>
			              <br />
			                Oct. 18
			              <br />
			                Nov. 1
			              <br />
			                Nov. 15
			              <br />
			                Dec. 6
			       		</Paragraph>
                        <Heading tag='h2'>@</Heading>
                        <Label>Highland Coffees</Label>
                        <Paragraph>3350 Highland Rd. <br /> Baton Rouge, LA 70802</Paragraph>
			          </Box>
			       </Columns>
			     </Box>
			    
			    </Section>
			  </Split>
			  <DeltaFooter />
			</div>
			
		)
	}
}