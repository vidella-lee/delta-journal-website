import React from 'react'
import Article from 'grommet/components/Article'
import Hero from 'grommet/components/Hero'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Heading from 'grommet/components/Heading'
import Headline from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Link from 'gatsby-link'
import Label from 'grommet/components/Label'
// import Image from 'grommet/components/Image'
import Columns from 'grommet/components/Columns'
import Anchor from 'grommet/components/Anchor'
import Split from 'grommet/components/Split'
import App from 'grommet/components/App'
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialInstagramIcon from 'grommet/components/icons/base/SocialInstagram';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';

import DeltaFooter from '../components/Footer'
import DeltaHeader from '../components/Header'

import {
	Grid,
	Image,
	Container,
	Icon 
} from 'semantic-ui-react'

var readingPic = require('../images/mic.png');
var cloudGradient = require('../images/cloud-gradient.png');

export default class Events extends React.PureComponent{
	render(){
	 return(
	 	<div>
	 	  <DeltaHeader />
	 	  <div className='event-page full-view'>
	 	  	<div className='event-box'>
	 	  		<Container>
	 	  			<Grid
	 	  		 	 columns={2} 
	 	  		 	 divided
	 	  		 	 // centered={true}
	 	  		 	 inverted={true}
	 	  		 	 >
	 	  			<Grid.Column>
		    			<Container textAlign='center'>
		    				<h1 className='event-head'>Events</h1>
		    			</Container>
		    			<p
		    			 className='event-text' 
		    			
		    			>
		    				  Celebrate, support, and participate in Baton Rouge and LSU's literary and creative communities.
		    				  Check here to keep up with upcoming Delta events like fundraisers, readings, 
		    				  workshops, etc. and follow us on social media for updates!
		    				</p>
		    				<div className='event-icon-group'>
		    					<a className='icon-link' href='https://www.facebook.com/DeltaLiteraryJournal'>
									<Icon 
									 size='big'
									 name='facebook square' />
								</a>	
								<a className='icon-link' href='https://www.instagram.com/deltajournal/'> 
									<Icon 
									 size='big'
									 name='instagram' />
								</a>	 
								<a className='icon-link' href='https://twitter.com/deltajournal'>	 
									<Icon 
									 size='big'
									 name='twitter square' />
  								</a>
		    				</div>
		    		</Grid.Column>
		    		<Grid.Column textAlign='left'>
		    			
		    			<Container className='event-card' centered={true}>
		    				<Image
		    				 size='tiny'
		    				 src={ readingPic }
		    				 floated='left'
		    				 circular={ true }
		    				 href='../highland-coffee-readings'
		    				/>
		    				<a 
		    				 style={{color: '#EEF2F6'}}
		    				 href='../highland-coffee-readings'
		    				 // className='underline-a'
		    				 >
		    				 	<h3 className='head-text'> 
		    				 		Highland Coffees Reading Series 
		    				 	</h3>
		    				</a>
		    				<p
		    				 className='event-card-text'
		    				 >
		    				 An open mic for poetic souls and storytellers. Twice a month.
		    				</p>
		    			</Container>
		    			<Container className='event-card' centered={true}>
		    					<Image
		    					 size='tiny'
		    					 src={ cloudGradient }
		    					 floated='left'
		    					 circular={ true }
		    					 href='#'
		    					/>	
		    				<a 
		    				 style={{color: '#EEF2F6'}}
		    				 href='../highland-coffee-readings'
		    				 // className='underline-a'
		    				 >
		    				 	<h3 className='head-text'> Upcoming Fundraiser </h3>
		    				</a>
		    				<p
		    				 className='event-card-text'
		    				 >
		    				 Details coming soon!
		    				</p>
		    			</Container>
		    		</Grid.Column>
		    	</Grid>
		    </Container>
		    </div>	
		 </div>
		 <DeltaFooter />
	   </div>	
	 )
	}
	

}