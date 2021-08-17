import React from 'react'
import Article from 'grommet/components/Article'
import Heading from 'grommet/components/Heading'
import Headline from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Label from 'grommet/components/Label'
// import Image from 'grommet/components/Image'
import Anchor from 'grommet/components/Anchor'
// import Split from 'grommet/components/Split'
// import Sidebar from 'grommet/components/Sidebar'
import App from 'grommet/components/App'
import Hero from 'grommet/components/Hero'

import Masthead from '../components/Masthead'
import DeltaFooter from '../components/Footer'
import DeltaHeader from '../components/Header'

import { Image, Container } from 'semantic-ui-react'

// var img = require('../images/delta+coffee.png');
// var img2 = require('../images/reading-2.jpg')
// var bkgrd = require('../images/delta-striped-1.png');

export default class About extends React.PureComponent {
	render(){
		return(
		  <Article colorIndex="neutral-2">
		  <DeltaHeader />
			<div className='about-hero-container'>
            	<div>
            	    <Heading
				     className='head-text about-h1'
				     > 
				     	ABOUT DELTA
				    </Heading>
				</div>	
            	     	
            </div>	    
			<div className='about-box'>

				<Container text
				 className='about-text'
				  >
				  <h1>Who We Are</h1>
					The Delta Literary Journal has been sharing the brilliance 
					of LSU’s undergraduate literary and visual artists since 1947.
					We aim to help foster an inclusive, supportive, and creative culture of literature.
					<br/>
					<br/>
					Every year, in the Spring Semester, we accept a variety of submissions such as poetry, fiction, nonfiction, 
					visual art, cartoons, comics, etc. from LSU undergraduates and publish their work in our literary magazine.
				</Container>
			</div>
			<Box
			 alignSelf='center'
			 margin={{bottom: 'large'}}
			 >
				<Masthead/>
			</Box>
			<DeltaFooter />
		  </Article>
		)
	}
}
