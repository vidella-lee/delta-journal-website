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
		<Box>	
        <Box
         // full='horizontal'
         colorIndex='neutral-3'
         textAlign='center'
         // margin={{bottom: 'medium'}}
         >
          <Heading align='center'>
            MASTHEAD
          </Heading>
	    </Box>
		  <Box
           pad='small' 
           direction='row' 
           align='center'
           justify='center' 
           // full='horizontal'
           className='masthead'
           >
          <Box
           direction='column' 
           alignSelf='center' 
           // full='vertical' 
           separator='left' 
           pad='medium' 
           margin={{right:'medium'}}
           >
            <Heading
             uppercase={ true } 
             size='large' 
             align='center' 
             // margin='large'
             > 
               Prose 
             </Heading>
        
              <Box separator='bottom' className='head-text'>
                <h3 className='masthead-headers'>
                  Editor in Chief
                </h3>  
              </Box>
              <Box 
               direction='row' 
               //responsive={ false }
               >
                <Paragraph margin='small'>
            	   Eunice Koomson
                </Paragraph>
               </Box>
         
         
               <Box separator='bottom' className='head-text'>
                 <h3 className='masthead-headers'>Staff</h3>
               </Box>
             <Paragraph align='center' margin='small'>
               [insert name] 
               <br />
               [insert name]
               <br />
               [insert name]
               <br />
               [insert name] 
               <br />
               [insert name]
               <br />
               [insert name]
               <br />
               [insert name]
              </Paragraph>
               
          </Box>

          <Box
           direction='column' 
           alignSelf='center' 
           // full='vertical' 
           separator='right' 
           pad='medium' 
           margin={{left:'medium'}}
           >
            <Heading 
             uppercase={ true } 
             size='large' 
             align='center' 
             // margin='large'
             > 
               Poetry
             </Heading>
           
              <Box separator='bottom' className='head-text'>
                <h3 className='masthead-headers'>
                  Editor in Chief
                </h3>
              </Box>
              <Box
               direction='row'
               //responsive={ false }
               >
                <Paragraph margin='small'>
            	   Jordan Marcell
                </Paragraph>
               </Box>
          
       
                <Box separator='bottom'>
                  <h3 className='masthead-headers'>Staff</h3>
                </Box>
             
                <Paragraph 
                 align='center' 
                 margin='small'
                 >
                 [insert name] 
                 <br />
                 [insert name]
                 <br />
                 [insert name]
                <br/>
                 [insert name] 
                 <br />
                 [insert name]
                 <br />
                 [insert name]
                 <br />
                 [insert name]
                </Paragraph>
          </Box>
				    </Box>
        
         </Box>

		)
	}
}