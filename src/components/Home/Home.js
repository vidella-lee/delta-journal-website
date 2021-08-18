import React from 'react'

//GROMMET COMPONENTS
import Article from 'grommet/components/Article';
import Hero from 'grommet/components/Hero';
import Title from 'grommet/components/Title';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Link from 'gatsby-link';
import Label from 'grommet/components/Label';
import Image from 'grommet/components/Image';
import Columns from 'grommet/components/Columns';
import App from 'grommet/components/App';

//CUSTOM COMPONENTS
import HeaderBox from  '../HeaderBox';
import FeatureCard from '../FeatureCard';
import DeltaFooter from '../Footer';
import DeltaHeader from '../Header';

//IMAGES
var hcCardImg = require('../../images/highland-coffees-sign-edit.png');
var applyCardImg = require('../../images/writer.jpg');
var journalCardImg = require('../../images/issue60-resized.jpg');

//var heroImage = require('./StrongWomen_AfsanehGhazavi.png');


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
                     //colorIndex='neutral-3'
                     //style={{  zIndex: '1000000000000000000000', position: 'absolute'}}
                     style={{
                        padding: '10px'
                     }}
                     >   
                      <Heading
                        className='home-h1'
                        align='center'
                        size='xlarge'
                       >
                          THE DELTA LITERARY JOURNAL
                      </Heading>
                    </Box>
                    <Box
                     //colorIndex='neutral-3'
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
                     align='start'
                     justify='center'
                     pad='large'
                     >
                        <Box 
                         pad='small'
                         //margin={{top: "large"}}
                         >
                            <FeatureCard
                             cardImg={hcCardImg}
                             label='Highland Coffees'
                             heading='Reading Series' 
                             description='An open mic for the poetic souls and storytellers. Twice a month.'
                             link='./highland-coffee-readings'
                             linkLabel='Share with the community.'
                             />
                            
                        </Box>
                        <Box pad='small'>
                            <FeatureCard
                             cardImg={journalCardImg}
                             label='Spring 2018'
                             heading='60th Issue' 
                             description='Our latest featuring some of LSU&#8217;s greatest.'
                             link='/delta60/'
                             linkLabel='Take a Look.'
                             />
                        </Box> 
                        <Box pad='small'> 
                            <FeatureCard
                             cardImg={applyCardImg}
                             label='Join Delta'
                             heading='Now Accepting Fall Semester Applications!' 
                             description='Do you have a passion for literature and editing? Join our team.'
                             link='https://goo.gl/forms/vPvhjh8TivsWHiVk2'
                             linkLabel='Submit an application here.'
                             />
                            
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
