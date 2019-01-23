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
import Image from 'grommet/components/Image'
import Columns from 'grommet/components/Columns'
import Anchor from 'grommet/components/Anchor'
import Split from 'grommet/components/Split'
import Sidebar from 'grommet/components/Sidebar'
import App from 'grommet/components/App'

// var proseAvi = require('./images/deltalogo-icy.png');

export default class Masthead extends React.PureComponent {
	render(){
		return(
		<div>	
        <Box
         // full='horizontal'
         colorIndex='neutral-3'
         textAlign='center'
         margin={{bottom: 'small'}}
         pad='medium'
         >
          <Heading align='center'>
            MASTHEAD
          </Heading>
	    </Box>
		  <Box /*****MASTHEAD CONTAINER*****/
       pad='small' 
       direction='row' 
       // align='start'
       // justify='start' 
       // full='horizontal'
       className='masthead'
      >
          <Box /*****FICTION CONTAINER*****/
           direction='column' 
           // alignSelf='center' 
           // full='vertical' 
           separator='left' 
           pad='medium' 
           margin={{right:'medium'}}
           >
           <Box /*****HEADING CONTAINER*****/
            pad='small'
            margin='small'
            colorIndex='neutral-3'
          >
            <Heading
             uppercase={ true } 
             size='large' 
             align='center' 
             // margin='large'
             > 
               Fiction 
             </Heading>
            </Box> 
              <Box separator='bottom' className='head-text'>
                <h3 className='masthead-headers'>
                  Editor in Chief
                </h3>  
              </Box>
              <Box>
                <p className='body-text'>
            	   Eunice Koomson
                </p>
               </Box>
               <Box separator='bottom' className='head-text'>
                 <h3 className='masthead-headers'>Staff</h3>
               </Box>
                  <Paragraph align='left' margin='small'>
                    Alden Caesar 
                    <br />
                    Amber Lattier
                    <br />
                    Ana Owen
                    <br />
                    Ashlynn Buzbee
                    <br />
                    Emily Wiewiorowski
                    <br />
                    Hayden Robert
                    <br />
                    Heidi Pitre
	                  <br />
                    Lizzie Vukovics
                    <br />
                    Logan Fontenot
                    <br />
                    Meagan Williams
                    <br />
                    Michaela O'Hanlon
                    <br />
                    Mike Frank
                    <br />
                    Noah Felps
	                 <br />
                    Nona Oldner
                    <br />
                    Rebecca Pererrette
		                <br />
                    Stella Burke
		                <br />
                    Tisheka Woodlief
              </Paragraph>
               
          </Box>

          <Box /*****POETRY CONTAINER*****/
           direction='column' 
           //alignSelf='center' 
           // full='vertical' 
           separator='right' 
           pad='medium' 
           margin={{left:'medium'}}
           >
           <Box /*****HEADING CONTAINER*****/
            pad='small'
            margin='small'
            colorIndex='neutral-3'
            justify='center'
          >
            <Heading
             uppercase={ true } 
             size='large' 
             align='center'
             // margin='large'
             > 
               Poetry
             </Heading>
            </Box>
            
              <Box separator='bottom' className='head-text'>
                <h3 className='masthead-headers'>
                  Editor in Chief
                </h3>
              </Box>
              <Box>
                <p className='body-text'>
                 
                </p>
               </Box>
              <Box
               direction='row'
               //responsive={ false }
               >
        
              
               </Box>
            
       
                <Box separator='bottom'>
                  <h3 className='masthead-headers'>Staff</h3>
                </Box>
             
                <Paragraph 
                 align='center' 
                 margin='small'
                 >
                 Amber McKinney
                 <br />
                 Antawn Amos
                 <br />
                 Ashley LaVergne
                <br/>
                 Kiana Naquin
                 <br />
                 Meagan Williams
                 <br />
                 Noah Felps
                 <br />
                 Nona Oldner
                 <br />
                 Reegan Wolfe
                 <br />
                 Stella Burke
                 <br />
                </Paragraph>
          </Box>
				    </Box>
        
         </div>

		)
	}
}
