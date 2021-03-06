import React from 'react'

import Article from 'grommet/components/Article'
import Hero from 'grommet/components/Hero'
import Title from 'grommet/components/Title'
import Heading from 'grommet/components/Heading'
import Headline from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'
import Link from 'gatsby-link'
import Label from 'grommet/components/Label'
import Image from 'grommet/components/Image'
import Columns from 'grommet/components/Columns'
import App from 'grommet/components/App'

import HeaderBox from  '../HeaderBox'
import HCRCard from '../HCRCard'
import ApplicationsCard from '../ApplicationsCard'
import FWCard from '../FeaturedWritersCard'
import JournalCard from '../JournalCard'
import DeltaFooter from '../Footer'
import DeltaHeader from '../Header'

// var heroImage = require('./cover-art.jpg');
var heroImage = require('./StrongWomen_AfsanehGhazavi.png');

// <Box size='small' basis='small' justify='center' colorIndex='accent-3' >
//                     <Label 
//                      align='center'
//                      >
//                      Now Accepting Applications for Spring 2019!</Label>
//                     </Box>

export default class Home extends React.PureComponent {
  render(){
  	
    return (
      <div>
        <DeltaHeader />
        <div className='app'>
          
            <Article colorIndex="neutral-2">
              <div className="head-text">
         
                  
                  <div
                   style={{margin:'0px'}, {width:'100%'}, {height:'100%'}, {filter:'drop-shadow(16px 16px 10px grey)'}, {backgroundColor: '#5F7A76'}}
                   >
                    {/* <div
                     className='home-hero-overlay'
                    >
                    
                    </div> */}

                    <div
                     className='home-hero-container'
                     //style={{  filter: 'blur(5px)'}}
                     //size='large'
                     // margin={{top: 'large'}}
                     //backgroundColorIndex='dark'
                     // background={
                     //  <Image
                     //   src={ heroImage }
                     //   // className='blurred'
                     //   full={ true }
                     //   fit="cover"
                     //   // align='bottom'
                     //   />
                     // }       
                    >
                  
                   
                    <Box
                     colorIndex='neutral-3'
                     //style={{  zIndex: '1000000000000000000000', position: 'absolute'}}
                     style={{
                        padding: '10px'
                     }}
                     >   
                      <Heading
                        align='center'
                        size='xlarge'
                       >
                          THE DELTA UNDERGRADUATE LITERARY JOURNAL
                      </Heading>
                    </Box>
                    <Box
                     colorIndex='neutral-3'
                     margin='small'
                     //style={{  zIndex: '1000000000000000000000', position: 'absolute'}}
                       // style={{
                       //    marginTop: '10px',
                       //   }}
                     >
                        <h2
                         className='sub-head-text'

                         
                        >
                           VOLUME 60
                        </h2>
                     </Box>
                   </div>
                    
                 </div>
                 
           
                </div>
                <App>
               
                    <Box 
                     direction='row'
                     colorIndex='neutral-2'
                     align='center'
                     justify='center'
                     >
                        <Box pad='small'>
                            <div style={{margin:'0px'}, {width:'100%'}, {height:'100%'}, {filter:'drop-shadow(10px -13px 5px grey)'}}>
                                <HCRCard />
                            </div>
                        </Box>
                        <Box pad='small'>
                            <div style={{margin:'0px'}, {width:'100%'}, {height:'100%'}, {filter:'drop-shadow(10px -13px 5px grey)'}}>   
                                <JournalCard/>
                            </div>
                        </Box> 
                        <Box pad='small'> 
                            <div style={{margin:'0px'}, {width:'100%'}, {height:'100%'}, {filter:'drop-shadow(10px -13px 5px grey)'}}> 
                                <ApplicationsCard/>
                            </div>
                        </Box>
                </Box>
           </App>
            </Article>
                
                <div>
                <Article colorIndex="neutral-2">

                <Section
            // full={true}
            // flex={true}
            // colorIndex="accent-2"
            // pad="large"
            // justify="center"
            >

            <div className="body-text">
        
            </div>
            </Section>   
            </Article>
            </div>
            
            </div>
            <DeltaFooter />
            </div>
            )
  }
}
