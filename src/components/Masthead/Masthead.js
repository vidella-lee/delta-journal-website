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
         // margin={{bottom: 'medium'}}
         >
          <Heading align='center'>
            <span className='masthead'>MASTHEAD</span>
          </Heading>
	    </Box>
		  <Box
           pad='small' 
           direction='row' 
           align='center'
           justify='center' 
           // full='horizontal'
           >
          <Box
           direction='column' 
           alignSelf='center' 
           // full='vertical' 
           separator='left' 
           pad='medium' 
           margin={{right:'medium'}}
           >
            <Label 
             uppercase={ true } 
             size='large' 
             align='center' 
             // margin='large'
             > 
               Prose 
             </Label>
            <Paragraph
             size='large'
             align='left'
             margin='small'
             >
              <Box separator='bottom' className='head-text'>
                Editor in Chief
              </Box>
              <Box direction='row' responsive={ false }>
                <div className='editor-pic'>
                
                </div>  
                            <Paragraph margin='small'>
            	  Eunice Koomson
                </Paragraph>
               </Box>
            </Paragraph>
             
            <Paragraph
             size='large'
             align='center'
             margin='small'
             >
               <Box separator='bottom' className='head-text'>
                 Staff
               </Box>
             </Paragraph>
             
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
            <Label 
             uppercase={ true } 
             size='large' 
             align='center' 
             // margin='large'
             > 
               Poetry
             </Label>
             <Paragraph
              size='large'
              align='center'
              margin='small'
             > 
              <Box separator='bottom' className='head-text'>
                Editor in Chief
              </Box>
              <Box
               direction='row'
               responsive={ false }
               >
              <div className='editor-pic'>
                
              </div>  
                            <Paragraph margin='small'>
            	  Jordan Marcell
                </Paragraph>
               </Box>
            </Paragraph>
             <Paragraph
                 size='large'
                 align='center'
                 margin='small'
                >
                <Box separator='bottom' className='head-text'>
                  Staff
                </Box>
                </Paragraph>
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
        
         </div>

		)
	}
}