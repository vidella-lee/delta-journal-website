import React from 'react'

import Article from 'grommet/components/Article'
import Headline from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Link from 'gatsby-link'
import Label from 'grommet/components/Label'
import Title from 'grommet/components/Title'
import Heading from 'grommet/components/Heading'
import Image from 'grommet/components/Image'
import Columns from 'grommet/components/Columns'
import Anchor from 'grommet/components/Anchor'
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Hero from 'grommet/components/Hero';
import Carousel from 'grommet/components/Carousel';
import App from 'grommet/components/App';

import DeltaFooter from '../components/Footer'
import DeltaHeader from '../components/Header'
import ArchivesTiles from '../components/ArchivesTiles'

var img = require('../images/issue60.jpg');
var delta1 =  require('../images/archives-pics/delta-1.png');

export default class Archives extends React.Component {
	render(){
		return(
			<div>
			<DeltaHeader />
			
		 	<Article colorIndex='neutral-3' className='archives'>
		 	  
		 	  <Section
		 	   // full='vertical'
		 	   >
		 	     <Box
		 	      direction='row'
		 	      
		 	      >
		 
		 	       <Box
		             separator='bottom'
		             // size={{height: 'small'}, {width: 'large'}}
		             pad='large'
		             full='horizontal'
		             alignSelf='end'
		             // colorIndex='neutral-1'
		             justify='center'
		 	        >
		 	          <Heading className='archives-heading' align='center'>
		 	           ARCHIVES
		 	           </Heading>
		 	        </Box>
		 	     
		          
		 	  </Box>
		 	  <ArchivesTiles />
		 
		 	  </Section>
		 	 
		 	</Article>
	
		 	 <DeltaFooter/>
		 	</div>
		 	)
	} 



}