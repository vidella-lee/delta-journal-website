import React from 'react'

import Link from 'gatsby-link'

import Article from 'grommet/components/Article'
import Hero from 'grommet/components/Hero'
// import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Heading from 'grommet/components/Heading'
import Headline from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Label from 'grommet/components/Label'
// import Image from 'grommet/components/Image'
import Columns from 'grommet/components/Columns'
import Anchor from 'grommet/components/Anchor'
import Split from 'grommet/components/Split'
import App from 'grommet/components/App'

import DeltaFooter from '../components/Footer'
import DeltaHeader from '../components/Header'
import { Modal, Header, Button, Grid, Image, Container, Reveal } from 'semantic-ui-react'

var logo = require('../images/logo-official.png');
var blank = require('../images/logo-blank.png');

export default class Submit extends React.Component{
	render(){
	 return(
	 	<div>
	 	<DeltaHeader />
        <div className='app'>
            <Article colorIndex="neutral-2">
              <div className="head-text">
                <Container textAlign='center'>
                	<div className='.submit-box'>
                		<Container className='inner-submit-box-1'>
        					<Header as='h1' className='head-text'>SUBMIT TO DELTA</Header>
        					 <Header.Subheader as='h4' className='head-text'>
        					 	Send us your best.
        					 <br/> 
        					 	Fiction, Non-Fiction, Poetry, and More.
        					 </Header.Subheader>
      					</Container>
      					<div className='inner-submit-box-2'>
      						<Container textAlign='center'>
      							<Header as='h3' className='head-text'>
      								Submissions open Spring 2019.
      							</Header>
      							        <Container textAlign='center'>
                      <a href='https://docs.google.com/forms/d/e/1FAIpQLSdlnZfPrymgMwCfWACreMKhstDM8RqdbJNYvvD4qdhm8bw0qw/viewform'>
                        <Button
                         style={{margin: '30px'}}
                         className='head-text'
                         >
                          SUBMIT
                        </Button>
                      </a> 
                    </Container>
      							<Header.Subheader
      							 as='h5'
      							 className='body-text'
      							 // style={{padding:'15px'}, {margin: '10px'}}
      							 > 
      							 	Read our submission guidlines below before submitting. &nbsp;
      							 	
      							</Header.Subheader>
      							
      						</Container>
      					</div>
      					
      				</div>
              
                  	<Grid columns={1}>
                  		<Grid.Column textAlign='left'>
                  				<Image src={ logo } size='small' centered={ true } />
                  		</Grid.Column>
                  			
                  	</Grid>
                  		<Container text textAlign='center'>
                  				<Header 
                  				 as='h2'
                  				 className='head-text' 
                  				 style={{padding:'15px'}, {margin: '30px'}}
                  				 > 
                  					SUBMISSION GUIDLINES 
                  				</Header>
                  			</Container>
                  		<Container text textAlign='justified'className='head-text' style={{padding:'15px'}, {margin: '25px'}}>
                  			
                  				To submit, you must be an LSU undergraduate. Submissions are open to undergrad students of all majors. 
                  				We’re also open to handwritten submissions if the fact that they’re handwritten is important to the 
                  				artistic statement of the piece.
                  				<br/>
                  				<br/>
								Submissions can be submitted using the link at the top of the page or sent to lsudelta@gmail.com.
								<br/>
								<br/>
								Please remove your name from the works that you submit and instead include a separate cover sheet 
								with the following information:
								<br/>
								<br/>
								
								<ul className='head-text'>
            						<li>Name</li>
            						<li>Contact information</li>
            						<li>Title of each work</li>
            						<li>Brief summary of work which should include a description of the intent behind any special 
            						or specific formatting choices.</li>
            					</ul>

            					<br/>
								<br/>
								<Container text className='head-text submission-guidlines'>
								<h2 className='head-text'>PROSE</h2>
								<br/>
								Prose includes short fiction, flash fiction, and nonfiction. Students may submit up to
								two stories of prose, totaling no more than 7,000 words (combined). 
								</Container>
								<Container text className='head-text submission-guidlines'>
  								<h2 className='head-text'>POETRY</h2>

  								Students may submit multiple pieces. Up to five pages of poetry total; No more than one poem per page.
  								<br/>
  								</Container>
  								<Container text className='head-text submission-guidlines'>
  								<h2 className='head-text'>VISUAL ART</h2>
  									We accept both traditional and digital art, including photography, comics, cartoons, and photographs of 3-dimensional art such as sculptures. 
									<br/>•   One piece will be selected to be featured on the Delta Journal’s cover and all other selected pieces will be included inside the journal. 
									<br/>•   1536 x 1024 pixels minimum for digital art submissions (share on Google Drive with the LSU Delta Gmail account:  lsudelta@gmail.com) 
									<br/>•   Artists may submit up to 3 different pieces.
								</Container>
                  		</Container>	
                  
               </Container>
            
                </div>
</Article>
	   </div>
	   <DeltaFooter />	
	   </div>
	 )
	}
	

}
